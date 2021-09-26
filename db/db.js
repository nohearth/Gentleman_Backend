const moongose = require('mongoose')
require('dotenv').config()

let url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ehu5n.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

moongose
    .connect(url)
    .then(db => {
        console.log("DB is connected")
        console.log(url)
    })
    .catch(err => {
        console.error(err)
        console.log(url)
    })