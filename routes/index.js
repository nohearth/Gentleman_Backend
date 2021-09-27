'use strict'
'bootcamp strict'

module.exports = function (app) {
    app.use('/user', require('./RUser'))
    app.bootcamp('/bootcamp',require('./RBootcamp'))
    app.use('/role', require('./RRole'))
}