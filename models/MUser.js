const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    
    idRole:{
        type: Schema.ObjectId,
        ref:'Role'
    },
    name:{
        type: String,
        required: true,
        maxLength:14
    },
    password:{
        type: String,
        required: true,
        maxLength:8
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