const User = require( "../models/userModel" );
const Chat = require( "../models/chatModel")


const accessChat = async( req, res ) =>{
    const { userId } = req.body

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
            select: 'name picture email'
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



module.exports = { accessChat }