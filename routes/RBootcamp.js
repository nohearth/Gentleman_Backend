const router = require('express').Router()
const cBootcamp = require('../controller/CBootcamp')

router.post('/',cBootcamp.crearteBootcamp)
router.get('/all',cBootcamp.getAllBootcamps)
router.get('/user/:id', cBootcamp.getBootcampsByUser)
router.get('/:id',cBootcamp.getBootcamp)
router.put('/:id',cBootcamp.updateBootcamp)
router.delete('/:id',cBootcamp.deleteBootcamp)

module.exports = router