const Controller = require("../controllers")
const router = require("express").Router()

router.get('/users', Controller.findAllUser)
router.get('/users/:id', Controller.findOneUser)
router.post('/users', Controller.createUser)
router.delete('/users/:id', Controller.deleteUser)

module.exports = router