const Router = require('express')
const router = new Router()
const {sendData, getData} = require("../controllers/dataController");

router.post('/', sendData);
router.get('/',getData);

module.exports = router;