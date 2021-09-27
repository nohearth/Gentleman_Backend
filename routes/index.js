'use strict'

module.exports = function (app) {
    app.use('/user', require('./RUser'))
    app.use('/bootcamp',require('./RBootcamp'))
    app.use('/role', require('./RRole'))
    app.use('/list',require('./RListBootcamps'))
}