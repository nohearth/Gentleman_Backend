'use strict'

module.exports = function (app) {
    app.use('/user', require('./RUser'))
    app.use('/role', require('./RRole'))
}