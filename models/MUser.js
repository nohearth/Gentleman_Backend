const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    
    idRole:{
        type: Number,
        ref:'Role',
        required:true
    },
    name:{
        type: String,
        required: true,
        maxLength:30,
    },
    userName: {
        type: String,
        required: true,
        maxLength:15
    },
    password:{
        type: String,
        required: true,
        maxLength: 60
    },
    email:{
        type: String,
        required: true,
        maxLength:30
    },
    socialNetwork:{
        type: String,
        required: true,
        maxLength:30
    },
    country:{
        type: String,
        required: true,
        maxLength:30
    },
    repository:{
        type: String,
        required: true,
        maxLength:40
    },
    description: {
        type: String,
        required:true,
        maxLength:150
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    updatedAt:{
        type: Date
    },
    deletedAt:{
        type: Date
    },
    status:{
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('User',userSchema)