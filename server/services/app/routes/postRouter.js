const Controller = require('../controllers')
const postRouter = require('express').Router()

postRouter.post('/', Controller.createNews)
postRouter.get('/', Controller.getNews)
postRouter.delete('/:id', Controller.deleteNews)
postRouter.put('/:id', Controller.updateNews)
postRouter.get('/:id', Controller.getNewsById)

module.exports = postRouter