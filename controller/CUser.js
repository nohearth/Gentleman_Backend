
const mUser = require('../models/MUser')

async function createUser(req, res) {
    try {

        const value = req.body
        const valUser = await mUser.findOne({
            email: value.email
        })

        if (valUser) {
            return res.status(400).json({
                Ok: 0,
                Data: valUser,
                Message: 'Error, email exists'
            })
        }

        const user = new mUser({
            name: value.name,
            email: value.email,
            password: value.password,
            socialNetwork: value.socialNetwork,
            country: value.country,
            repository: value.repository,
            description: value.description
        })
    
        const saveUser = await user.save()
        res.status(200).json({
            Ok: 1,
            Data: saveUser,
            Message: "Success"
        })
    } catch (e) {
        res.status(400).json({
            Ok: 0,
            Message: e
        })
    }
}

async function getAllUsers(req, res) {
    try {
        const users = await mUser.find()
        res.status(200).json({
            Ok: 1,
            Data: users,
            Message: "Success"
        })
    } catch (error) {
        res.status(400).json({
            Ok: 0,
            Message: e
        })
    }
}

async function getUser(req, res) {
    try {
        const user = await mUser.findOne({_id: req.params.id})
        res.status(200).json({
            Ok: 1,
            Data: user,
            Message: "Success"
        })
    } catch (error) {
        res.status(400).json({
            Ok: 0,
            Message: e
        })
    }
}

async function updateUser(req, res) {
    try {
        const user = await mUser.findOne({_id: req.params.id})
        const data = req.body

        const saveUser = await mUser.updateOne({
            email: data.email
        }, {
            $set: data
        })
        res.status(200).json({
            Ok: 1,
            Data: saveUser,
            Message: "Success"
        })
    } catch (error) {
        res.status(400).json({
            Ok: 0,
            Message: e
        })
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateUser
}
