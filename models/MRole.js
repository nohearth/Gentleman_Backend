const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
        maxLength:14
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
module.exports = mongoose.model('Role',roleSchema)