const Controller = require('../controllers')
const userRouter = require('express').Router()
const authentication = require('../middlewares/authentication');

userRouter.post('/login', Controller.login)

userRouter.use(authentication) //<<<<<<<<<<<<<<<<<<<<<

userRouter.post('/register', Controller.register)

module.exports = userRouter