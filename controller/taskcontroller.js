const { task } = require('../models')

exports.create = async (req, res) => {
    console.log(req.body)
    await task.create(req.body).then(task => {
        res.status(200).json({
            success: true,
            message: 'task added successfully',
            result: task
        })
    }).catch(error => {
        res.status(400).json({
            success: false,
            message: 'Something went wrong while adding the task',
            Error: error 
        })
    })
}
