const router = require('express').Router()
const cRole = require('../controller/CRole')

router.post('/', cRole.createRole)

module.exports = router