const Controller = require('../controllers')

const customerRouter = require('express').Router()

customerRouter.post('/login', Controller.loginCustomer)
customerRouter.post('/register', Controller.registerCustomer)
customerRouter.get('/news', Controller.getNews)
customerRouter.get('/news/:id', Controller.getNewsById)

module.exports = customerRouter