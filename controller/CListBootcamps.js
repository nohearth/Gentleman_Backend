
const mListBootcamps = require('../models/MListBootcamps')
const mBootcamp = require('../models/MBootcamp')
const mUser = require('../models/MUser')
const resp = require('../utils/responses')


async function crearteListBootcamps(req,res){
    try {
        const value = req.body
        const user = await mUser.findOne({
            _id: value.idUser
        })
        if (!user) {
            resp.makeResponsesError(res, "UNotFound")
        }
        const user = await mUser.find({_id: req.params.id})
        if (user.idRole === 2) {
            return resp.makeResponsesException(res, "Unauthorized") 
        }
        const bootcamp = await mBootcamp.findOne({
            _id: value.idBootcamp
        })
        if (!bootcamp) {
            resp.makeResponsesError(res, "BNotFound")
        }
        const listBootcamps = new mListBootcamps({
            idUser:value.idUser,
            idBootcamp:value.idBootcamps,
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

async function getListBootcampsByUser(req,res){
    try {
        const user = await mUser.find({_id: req.params.id})
        if (user.idRole === 2) {
            return resp.makeResponsesException(res, "Unauthorized") 
        }
        const listBootcamps = await mListBootcamps.find({idUser: req.params.id})
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
        if (!user) {
            resp.makeResponsesError(res, "UNotFound")
        }
        const bootcamp = await mBootcamp.findOne({
            _id: value.idBootcamp
        })
        if (!bootcamp) {
            resp.makeResponsesError(res, "BNotFound")
        }
        const saveListBootcamps= await mListBootcamps.updateOne({
            _id: req.params.id
        },{
            $set: data
        })
        resp.makeResponsesOkData(res,saveListBootcamps,"LUpdated")

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
            _id:req.params.id
        })
        resp.makeResponsesOkData(res,deleteListBootcamps,"LDeleted")
    } catch (e) {
        resp.makeResponsesException(res,e)
    }
}
module.exports={
    crearteListBootcamps,
    getAllListBootcamps,
    getListBootcamps,
    updatelistBootcamps,
    deleteListBootcamps,
    getListBootcampsByUser
}