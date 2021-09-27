const mBootcamp = require('/models/MBootcamp')

async function crearteBootcamp(req, res) {
    try{
        /* const value = req.body
        const name = value.name
        const item = Array(value.idUser)
        item.forEach((element,index)=>{
            const valBootcamp = await mBootcamp.find({
                idUser:item[index]
            })
        })
        if (valBootcamp.name===name) {
            return res.status(400).json({
                Ok: 0,
                Data: valBootcamp,
                Message: 'Error, name exists'

            })
        } */
        const bootcamp = new mBootcamp({
            name: value.name,
            description: value.description
        })
        const saveBootcamp = await bootcamp.save()
        res.status(200).json({
            Ok:1,
            Data: saveBootcamp,
            Message: "Success"
        })
    }catch(e){
        res.status(400).json({
            Ok:0,
            Message: e
        })
        }
}
async function getAllBootcamps(req,res){
    try {
        const bootcamps = await mBootcamp.find()
        res.status(200).json({
            Ok: 1,
            Data: bootcamps,
            Message: "Success"
        })
    } catch (e) {
        res.status(400).json({
        Ok: 0,
        Message: e
        })
    }
}

async function getBootcamp(req, res) {
    try {
        const bootcamp = await mBootcamp.findOne({_id: req.params.id})
        res.status(200).json({
            Ok: 1,
            Data:bootcamp,
            Message: "Success"
        })
    } catch (error) {
        res.status(400).json({
            Ok: 0,
            Message: e
        })
    }
}
async function updateBootcamp(req,res){
    const bootcamp = await mBootcamp.findOne({_id: req.params.id})
    const data = res.body
    try {
        const saveBootcamp = await mBootcamp.updateOne({
            id: data.id
        },{
            $set:data
        })
        res.status(200).json({
            Ok: 1,
            Data: saveBootcamp,
            Message: "Success"
        })
    } catch (e) {
        res.status(400).json({
            Ok: 0,
            Message: e
        })
    }
}
async function deleteBootcamp(req,res){
    const bootcamp = await mBootcamp.findOne({_id: req.params.id})
    const data = res.body
    try {
        const deleteBootcamp = await mBootcamp.deleteOne({
            id:data.id
        },{
            $set:data
        })
        res.status(200).json({
            Ok: 1,
            Data:deleteBootcamp,
            Message: "Success"
        })
    } catch (e) {
        res.status(400).json({
            Ok: 0,
            Message: e
        })
    }
}
module.exports ={
    crearteBootcamp,
    getAllBootcamps,
    getBootcamp,
    updateBootcamp,deleteBootcamp
}