const mBootcamp = require('../models/MBootcamp')
const resp = require('../utils/responses')

async function crearteBootcamp(req, res) {
    try{
        const value = req.body

        const valBootcamp = await mBootcamp.find({
            idUser: value.idUser
        })

        valBootcamp.forEach((el, index) => {
            if (el.name === value.name) {
                return resp.makeResponsesError(res, "BName")
            }
        })

        const bootcamp = new mBootcamp({
            name:value.name,
            description:value.description,
            idUser:value.idUser
        })
        const saveBootcamp = await bootcamp.save()
        resp.makeResponsesOkData(res, saveBootcamp, "BCreated")
    }catch(e){
        resp.makeResponsesException(res,e)
    }
}
async function getAllBootcamps(req,res){
    try {
        const bootcamps = await mBootcamp.find()
        resp.makeResponsesOkData(res, bootcamps, "Success")
    } catch (e) {
        resp.makeResponsesException(res,e)
    }
}

async function getBootcamp(req, res) {
    try {
        const bootcamp = await mBootcamp.findOne({_id: req.params.id})
        resp.makeResponsesOkData(res, bootcamp, "Success")
    } catch (error) {
        resp.makeResponsesException(res,e)
    }
}
async function updateBootcamp(req,res){
    const bootcamp = await mBootcamp.findOne({_id: req.params.id})

    if (!bootcamp) {
        return resp.makeResponsesError(res, "BNotFound")
    }

    const data = res.body
    try {
        const saveBootcamp = await mBootcamp.updateOne({
            _id: req.params.id
        },{
            $set:data
        })
        resp.makeResponsesOk(res, "BUpdated")
    } catch (e) {
        resp.makeResponsesException(res,e)
    }
}
async function deleteBootcamp(req,res){
    const bootcamp = await mBootcamp.findOne({_id: req.params.id})

    if (!bootcamp) {
        return resp.makeResponsesError(res, "BNotFound")
    }
    const data = res.body
    try {
        const deleteBootcamp = await mBootcamp.deleteOne({
            _id: req.params.id
        })
        resp.makeResponsesOk(res, "BDeleted")
    } catch (e) {
        resp.makeResponsesException(res,e)
    }
}
module.exports ={
    crearteBootcamp,
    getAllBootcamps,
    getBootcamp,
    updateBootcamp,
    deleteBootcamp
}