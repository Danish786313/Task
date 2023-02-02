const { body } = require('express-validator');
const { task } = require("../models");

exports.createtaskValidation = (req, res) => {
  return [
    body('user_id', "user_id is required"),
    body('taskname', 'Task name is Required').notEmpty().trim(),
    body('tasktype', 'Status is required').notEmpty().isIn(['Pending', 'Done']).trim(),
    body('taskname').custom(async value => {
      return await task.findOne({ where: { taskname: value }, raw: true }).then(taskname => {
        if (taskname) {
          return Promise.reject('Task Already Taken')
        }
      })
    })
  ]
}
