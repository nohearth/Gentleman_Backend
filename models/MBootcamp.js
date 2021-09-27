
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bootcampsSchema = mongoose.Schema({
    idUser:{
        type: Schema.ObjectId,
        ref:'User'
    },
    name:{
        type: String,
        required:true,
        maxLength:14
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
module.exports = mongoose.model('Bootcamps',bootcampsSchema)

