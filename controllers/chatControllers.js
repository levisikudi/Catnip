const User = require( "../models/userModel" );
const Chat = require( "../models/chatModel")


const accessChat = async( req, res ) =>{
    const { userId } = req.params
    console.log(req.params.userId);
    console.log('hitting access chat route');

    if(!userId){
        console.log("Id not in request");
        return res.status(400)
    }

    let isChat = await Chat.find({
        isGroupChat: false,
        $and:[
            {users:{$elemMatch: {$eq: req.session.passport.user._id}}},
            {users: {$elemMatch: {$eq: userId}}}
        ]
    }).populate('users', "-password -city -state -description")
        .populate('latestMessage')

        isChat = await User.populate(isChat, {
            path: 'latestMessage.sender',
            select: 'firstName picture email'
        })

        if (isChat.length > 0){
            res.send(isChat[0])
        }else{
            let chatData = {
                chatName: "sender",
                isGroupChat: false,
                users:[req.session.passport.user._id, userId]
            }
            try {
                const newChat = await Chat.create(chatData);
                const entireChat = await Chat.findOne({_id: newChat._id}).populate('users', "-password -city -state -description")

                res.send(entireChat)
            } catch (error) {
                throw new Error(error.message)
            }
        }


}

const getChat = async( req, res ) =>{
    console.log('hitting fetching chat route');
    try {
       await Chat.find({users: {$elemMatch: { $eq: req.user._id}}})
       .populate("users", "-password -city -state -description" )
       .populate("groupAdmin", "-password -city -state -description")
       .populate("latestMessage")
       .sort({ updatedAt: -1 })
       .then(async (chats) =>{
        chats = await User.populate(chats, {
            path: "latestMessage.sender",
            select: "firstName picture email"
        })
        console.log(chats);
       res.send(chats)
       })

       
    } catch (error) {
        res.status(400)
        console.log("Couldn't get this user's chats");
        throw new Error(error.message)
    }
} 

const createGroupChat = async (req, res ) =>{
    if (req.body.users || req.body.name ){
        return res.send({message: "Please fill in all the fields"})
    }
    let users = JSON.parse(req.body.users)
    
    if (users.length < 2){
        return res.send("More than 2 users required to form a Group Chat")
    }
    users.push(req.session.passport.user)
    try {
        const groupChat = await Chat.create({
            chatName: req.body.name,
            users: users,
            isGroupChat: true,
            groupAdmin: req.session.passport.user
        })

        const entireGroupChat = await Chat.findOne({_id: groupChat._id})
        .populate("users", "-password -city -state -description" )
        .populate("groupAdmin", "-password -city -state -description" )

        res.json(entireGroupChat)


    } catch (error) {
        res.status(400)
        console.log("Couldn't get this user's chats");
        throw new Error(error.message)
    }


}

const renameGroupChat = async (req, res) =>{
    const {chatId, chatName } = req.body
    const updatedConvo = await Chat.findByIdAndUpdate(chatId,{chatName},{new:true})
        .populate("users", "-password -city -state -description" )
        .populate("groupAdmin", "-password -city -state -description" )

    if(!updatedConvo){
        res.status(404)

        throw new Error ("Chat not found")
    }else{
        console.log(updatedConvo);
        res.json(updatedConvo)
    }


}

const addToGroup = async (req, res) =>{
    const { chatId, userId } = req.body

    const added = await Chat.findByIdAndUpdate(chatId, {$push:{ users: userId}}, {new: true})
    .populate("users", "-password -city -state -description" )
    .populate("groupAdmin", "-password -city -state -description" )

     if(!added){
        res.status(404)

        throw new Error ("Could not add")
    }else{
        console.log(added);
        res.json(added)
    }

}

const removeFromGroup = async (req, res) =>{
    const { chatId, userId } = req.body

    const added = await Chat.findByIdAndUpdate(chatId, {$pull:{ users: userId}}, {new: true})
    .populate("users", "-password -city -state -description" )
    .populate("groupAdmin", "-password -city -state -description" )

     if(!added){
        res.status(404)
        throw new Error ("Could not add")
    }else{
        console.log(added);
        res.json(added)
    }

}

module.exports = { accessChat, getChat, createGroupChat, renameGroupChat, addToGroup, removeFromGroup}
