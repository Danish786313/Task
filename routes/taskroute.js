const express = require('express')
const router = express.Router()
const taskcontroller = require("../controller/taskcontroller")
const { createtaskValidation, updatetaskValidation } = require('../validation/taskvalidation');
const { validate } = require('../validation/validate');


router.param("taskId", taskcontroller.gettask)

router.post("/task", createtaskValidation(), validate, taskcontroller.create)

router.get("/task", taskcontroller.findAll)

router.get("/task/:taskId", taskcontroller.findOne)

router.put("/task/:taskId", updatetaskValidation(), validate, taskcontroller.update)

router.delete("/task/:taskId", taskcontroller.delete)

module.exports = router


