const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = mongoose.Schema({
    idUser:{
        type: Schema.ObjectId,
        ref:'User'
    },
    idBootcamps:{
        type: Schema.ObjectId,
        ref:'Bootcamps'
    },
    isApply:{
        type:Boolean,
        default:true
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
module.exports = mongoose.model('ListBootcamps',listSchema)