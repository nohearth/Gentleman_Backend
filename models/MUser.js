const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    
    idRole:{
        type: Number,
        ref:'Role'
    },
    name:{
        type: String,
        required: true,
        maxLength:30,
    },
    userName: {
        type: String,
        required: true,
        maxLength:15
    },
    password:{
        type: String,
        required: true,
        maxLength:8
    },
    email:{
        type: String,
        required: true,
        maxLength:30
    },
    socialNetwork:{
        type: String,
        required: true,
        maxLength:30
    },
    country:{
        type: String,
        required: true,
        maxLength:30
    },
    repository:{
        type: String,
        required: true,
        maxLength:40
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

userSchema.methods.generateToken = async function () {
    const user = this
    const token = jwt.sign({ id: user._id }, "Flamethyst-secret", { expiresIn: 86400 })
    return token
}

userSchema.pre("save", async function(next) {
    const user = this
    if (user.isModififed("password")) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})
module.exports = mongoose.model('User',userSchema)