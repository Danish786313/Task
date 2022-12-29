const { validationResult } = require('express-validator')

exports.validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    
    
    var extractedErrors = {}
    errors.array().map(err => extractedErrors[err.param]= err.msg )
    
    return res.status(422).json({
      success:false,
      error: extractedErrors,
    })
    
   
  }