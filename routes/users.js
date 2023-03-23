const exp = require("express");
const router = exp.Router();
const controller = require('../controller/users.controller')

router.post('/login', controller.login);

module.exports = router;
