const { body } = require('express-validator');
const { task } = require("../models");
const { Op } = require("sequelize");

exports.createtaskValidation = (req, res) => {
  return [
    body('taskname', 'Name is Required').notEmpty().trim(),
    body('status', 'Status is required').notEmpty().isIn(['Complited', 'Uncomplite', 'Running']).trim(),
    body('taskname').custom(async value => {
      return await task.findOne({ where: { taskname: value }, raw: true }).then(taskname => {
        if (taskname) {
          return Promise.reject('Task Already Taken')
        }
      })
    })
  ]
}

exports.updatetaskValidation = () => {
  return [
    body('taskname').custom(async (value, { req }) => {
      return await task.findOne({
        where: {
          id: {
            [Op.ne]: req.params.taskId
          },
           taskname: value,
        }, raw: true
      })
        .then(taskname => {
          if (taskname) {
            return Promise.reject('Task Already Taken')
          }
        })
    }),
    body('status', 'Status is required').notEmpty().isIn(['Complited', 'Uncomplite', 'Running']).trim(),
  ]
}


