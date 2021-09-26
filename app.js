const express = require('express')
const cors = require('cors')

// Databse connection
require('./db/db')

const port = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use(cors())

require('./routes')(app)

app.get('/api', (req, res) => {
    res.send('Connected')
})
app.listen(port)