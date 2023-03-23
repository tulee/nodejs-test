const exp = require("express");
const router = exp.Router();
const controller = require('../controller/inventories.controller')
const validateToken = require('../validateToken');


router.get('/',validateToken, controller.getAllProduct);

module.exports = router;
