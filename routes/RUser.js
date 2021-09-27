const router = require('express').Router()
const cUSer = require('../controller/CUser')

router.post('/create', cUSer.createUser)
router.get('/all', cUSer.getAllUsers)
router.get('/:id', cUSer.getUser)
router.put('/:id', cUSer.updateUser)

module.exports = router