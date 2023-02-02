const express = require('express')
const router = express.Router()
const usercontroller = require("../controller/usercontroller")

const { createUserValidation } = require('../validation/uservalidation');
const { validate } = require('../validation/validate');

router.post("/user", createUserValidation(), validate, usercontroller.create)


module.exports = router
