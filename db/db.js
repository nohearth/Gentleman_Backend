const moongose = require('mongoose')
require('dotenv').config()

let url = `mongodb+srv://gentleman:sOp7HgpCAcE5OGR9@cluster0.ehu5n.mongodb.net/GentlemanAPI?retryWrites=true&w=majority`

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