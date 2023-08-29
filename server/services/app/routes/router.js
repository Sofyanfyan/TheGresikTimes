const router = require('express').Router()
const authentication = require('../middlewares/authentication');
const userRouter = require('./userRouter');
const postRouter = require('./postRouter')
const categoryRouter = require('./categoryRouter');
const customerRouter = require('./customerRouter');

router.use('/users', userRouter)

router.use('/pub', customerRouter)

router.use(authentication)
router.use('/news', postRouter)
router.use('/categories', categoryRouter)

module.exports = router