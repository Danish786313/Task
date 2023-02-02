const { body } = require('express-validator');
const { User } = require("../models");

exports.createUserValidation = (req, res) => {
  return [
    body('name', 'Name is Required').notEmpty().trim(),
    body('email', 'Email is Required').notEmpty().trim(),
    body('mobile', 'Number is Required').notEmpty().isLength({min: 10, max: 10}).trim(),
    body('email').custom(async value => {
      return await User.findOne({ where: { email: value }, raw: true }).then(email => {
        if (email) {
          return Promise.reject('Email Already Taken')
        }
      })
    })
  ]
}
