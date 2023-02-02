const express = require('express')
const router = express.Router()
const taskcontroller = require("../controller/taskcontroller")
const { createtaskValidation } = require('../validation/taskvalidation');
const { validate } = require('../validation/validate');

router.post("/task", createtaskValidation(), validate, taskcontroller.create)

module.exports = router


