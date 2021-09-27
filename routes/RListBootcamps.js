const router = require('express').Router()
const cList = require('../controller/CListBootcamps')

router.post('/',cList.crearteListBootcamps)
router.get('/all',cList.getAllListBootcamps)
router.get('/user/:id', cList.getListBootcampsByUser)
router.get('/:id',cList.getListBootcamps)
router.put('/:id',cList.updatelistBootcamps)
router.delete('/:id',cList.deleteListBootcamps)
module.exports = router