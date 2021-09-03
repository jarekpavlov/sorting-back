const Router = require('express')
const router = new Router()
const processRouter = require('../routes/processRouter')

router.use('/carpolicy', processRouter)

module.exports = router