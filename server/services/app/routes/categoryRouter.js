const Controller = require("../controllers")

const categoryRouter = require("express").Router()

categoryRouter.post('/', Controller.createCategory)
categoryRouter.get('/', Controller.getCategory)
categoryRouter.delete('/:id', Controller.deleteCategory)
categoryRouter.put('/:id', Controller.updateCategory)
categoryRouter.get('/:id', Controller.getCategoryById)

module.exports = categoryRouter