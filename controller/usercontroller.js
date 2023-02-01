const { User } = require("../models")

exports.create = async (req, res) => {
    console.log(req.body)
    await User.create(req.body).then(user => {
        res.status(200).json({
            success: true,
            message: 'User created successfully',
            result: user
        })
    }).catch(error => {
        res.status(400).json({
            success: false,
            message: 'Something went wrong while Creating user',
            Error: error 
        })
    })
}
