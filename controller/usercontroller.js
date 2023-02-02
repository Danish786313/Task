const { User } = require("../models")

exports.create = async (req, res) => {
    console.log(req.body)
    await User.create(req.body).then(user => {
        return res.render("success.ejs")
        res.status(200).json({
            success: true,
            message: 'User created successfully',
            result: user
        })
    }).catch(error => {
        return res.render("errorindb.ejs")
        res.status(400).json({
            success: false,
            message: 'Something went wrong while Creating user',
            Error: error 
        })
    })
}
