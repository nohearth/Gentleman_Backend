const jwt = require('jsonwebtoken')
const resp = require('../utils/responses')
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.replace("Bearer ", "")
        const decoded = jwt.verify(token, "Flamethyst-secret")
        req.userId = decoded.id
    } catch (e) {
        resp.makeResponsesException(res, "Error, Unauthorized")
    }
}