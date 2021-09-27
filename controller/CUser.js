const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const mUser = require('../models/MUser')
const resp = require('../utils/responses')
const validate = require('../utils/validate')

async function createUser(req, res) {
    try {

        const value = req.body
        const valUser = await mUser.findOne({
            email: value.email
        })

        if (valUser) {
            return resp.makeResponsesError(res, "UFound")
        }

        const user = new mUser({
            name: value.name,
            userName: value.userName,
            email: value.email,
            password: bcrypt.hashSync(value.password, 8),
            socialNetwork: value.socialNetwork,
            country: value.country,
            repository: value.repository,
            description: value.description,
            idRole: value.idRole 
        })
    
        const saveUser = await user.save()
        
        resp.makeResponsesOkData(res, saveUser, "UCreated")
    } catch (e) {
        resp.makeResponsesException(res,e)
    }
}

async function login(req, res) {
    try {
        const valUser = await mUser.findOne({
            userName: req.body.userName
        })
        if (!valUser) {
            return resp.makeResponsesError(res, "ULoginError1")
        }
        const valPass = await validate.comparePassword(req.body.password, valUser.password)
        if (!valPass) {
            return resp.makeResponsesError(res, "ULoginError2")
        }

        const token = jwt.sign({ id: valUser._id }, "Flamethyst-secret", { expiresIn: 86400 })
        const user = {
            name: valUser.name,
            userName: valUser.userName,
            email: valUser.email,
            socialNetwork: valUser.socialNetwork,
            country: valUser.country,
            repository: valUser.repository,
            description: valUser.description,
            idRole: valUser.idRole,
            token: token 
        }

        resp.makeResponsesOkData(res, user, "Success")
    } catch (e) {
        resp.makeResponsesException(res,e)
    }
}

async function getAllUsers(req, res) {
    try {
        const users = await mUser.find()
        resp.makeResponsesOkData(res, users, "Success")
    } catch (e) {
        resp.makeResponsesException(res,e)
    }
}

async function getUser(req, res) {
    try {
        const user = await mUser.findOne({_id: req.params.id})
        resp.makeResponsesOkData(res, user, "Success")
    } catch (e) {
        resp.makeResponsesException(res,e)
    }
}

async function updateUser(req, res) {
    try {
        const user = await mUser.findOne({_id: req.params.id})
        const data = req.body
        if (!user) {
            return resp.makeResponsesError(res, "UNotFound")
        }
        const saveUser = await mUser.updateOne({
            email: data.email
        }, {
            $set: data
        })
        resp.makeResponsesOkData(res, saveUser ,"UPdated")
    } catch (e) {
        resp.makeResponsesException(res,e)
    }
}

async function deleteUser(req, res) {
    try {
        const user = await mUser.findOne({_id: req.params.id})

        if (!user) {
            return resp.makeResponsesError(res, "UNotFound")
        }
        const saveUser = await mUser.deleteOne({
            _id: user._id
        })
        resp.makeResponsesOkData(res, saveUser ,"UPdated")
    } catch (e) {
        resp.makeResponsesException(res,e)
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    login
}
