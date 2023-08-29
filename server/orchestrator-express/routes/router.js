const router = require('express').Router()
const Controller = require('../controllers')

router.post('/users', Controller.createUser)
router.get('/users',Controller.getAll)
router.delete('/users/:id', Controller.deleteUser)

module.exports = router