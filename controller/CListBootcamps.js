
const { response } = require('express')
const mListBootcamps = require('../models/MListBootcamps')
const resp = require('../utils/responses')


async function crearteListBootcamps(req,res){
    try {
        const value = req.body
        const valListBootcamps = await mListBootcamps.findById({
            idUser:value.idUser,
            idBootcamps:value.idBootcamps
        })
        if(valListBootcamps){
            return resp.makeResponsesError(res,"LFound")
        }
        const listBootcamps = new mListBootcamps({
            idUser:value.idUser,
            idBootcamps:value.idBootcamps,
            isApply:value.isApply
        })
        const saveListBootcamps = await listBootcamps.save()
       resp.makeResponsesOkData(res,saveListBootcamps,"LCreated")
    }catch (e) {
        resp.makeResponsesException(res,e)}
}

async function getAllListBootcamps(req,res){
    try {
        const listBootcamps = await mListBootcamps.find()
        resp.makeResponsesOkData(res,listBootcamps,"Success")
    } catch (e) {
        resp.makeResponsesException(res,e)
    }
}

async function getListBootcamps(req,res){
    try {
        const listBootcamps = await mListBootcamps.findOne({_id: req.params.id})
        resp.makeResponsesOkData(res,listBootcamps,"Success")
    } catch (e) {
        resp.makeResponsesException(res,e)
    }
}

async function updatelistBootcamps(req,res){
    try{
        const listBootcamps = await mListBootcamps.findOne({_id: req.params.id})
        const data = req.body
        if(!listBootcamps){
            return resp.makeResponsesError(res,"LNotFound")
        }
        const saveListBootcamps= await mListBootcamps.updateOne({
            idUser:data.idUser,
            idBootcamps:data.idBootcamps
        },{
            $set: data
        })
        resp.makeResponsesOkData(res,saveListBootcamps,"Updated")

    }catch(e){
        resp.makeResponsesException(res,e)
    }

}
async function deleteListBootcamps(req,res){
    try {
        const listBootcamps = await mListBootcamps.findOne({_id: req.params.id})
        if(!listBootcamps){
            return resp.makeResponsesError(res,"LNotFound")
        }
        const deleteListBootcamps = await mListBootcamps.deleteOne({
            _id:listBootcamps._id
        })
        resp.makeResponsesOkData(res,deleteListBootcamps,"Updated")
    } catch (e) {
        resp.makeResponsesException(res,e)
    }
}
module.exports={
    crearteListBootcamps,
    getAllListBootcamps,
    getListBootcamps,
    updatelistBootcamps,
    deleteListBootcamps
}