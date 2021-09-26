const moongose = require('mongoose')
require('dotenv').config()

//mongo atlas connect

let url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ehu5n.mongodb.net/${process.env.NAME}?retryWrites=true&w=majority`

moongose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log("DB is connected"))
    .catch(err => {
        console.error(err)
        console.log(url)
    })