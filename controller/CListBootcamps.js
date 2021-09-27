
const mListBootcamps = require('../models/MListBootcamps')

async function crearteListBootcamps(req,res){
    try {
        const value = req.body
        const valListBootcamps = await mListBootcamps.findById({
            idUser:value.idUser,
            idBootcamps:value.idBootcamps
        })
        if(valListBootcamps){
            return res.status(400).json({
                Ok:0,
                Data:valListBootcamps,
                Message:'Error, list exists'
            })
        }

    }catch (error) {
        res.status(400).json({
            Ok:0,
            Message: error
        })
    }
}