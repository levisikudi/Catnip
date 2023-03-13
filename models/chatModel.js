const mongoose = require('mongoose')

const chatModel = mongoose.Schema({
    users:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    chatName:[{
        type: String
    }],
    groupAdmin:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    isGroupChat:{
        type: Boolean,
        default: false
    },
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    },
    messages:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }]
},
{
    timestamps: true,
}
)

const Chat = mongoose.model('Chat', chatModel)

module.exports = Chat