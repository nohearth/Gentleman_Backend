const router = require('express').Router()
const cBootcamp = require('../controller/CBootcamp')

router.post('/signup',cBootcamp.crearteBootcamp)
router.get('/all',cBootcamp.getAllBootcamps)
router.get('/:id',cBootcamp.getBootcamp)
router.put('/:id',cBootcamp.updateBootcamp)
router.delete('/:id',cBootcamp.deleteBootcamp)