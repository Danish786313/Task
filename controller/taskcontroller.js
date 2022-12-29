const { task } = require('../models')

exports.gettask = async (req, res, next, id) => {
    await task.findByPk(id).then(task => {
        if(task){
            req.task = task;
            next()
        }else{
            throw Error
        }
    }).catch(err => {
        return res.status(400).json({
            success: false,
            message: "Task does not exists."
        })
    })
}

exports.create = async (req, res) => {
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

exports.findOne = async (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            message: "Task fetched successfully.",
            Task: req.task
        })
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: "Error fetching Task.",
            Error: error
        })
    }
}

exports.findAll = async (req, res) => {
    await task.findAll()
    .then(task => {
        if(task.length){
            res.status(200).json({
                success: true,
                message: 'All task fetched successfully',
                result: task
            })
        } else {
            res.status(400).json({
                success: false,
                message: 'No task found',
                result: task
            })
        }
    }).catch(error => {
            res.status(400).json({
                success: false,
                message: 'Something went wrong while fetching task',
                Error: error
            })
        })
}


exports.update = async (req, res) => {
    await task.update(req.body, {where: {id: req.params.taskId}})
    .then(task => {
        res.status(200).json({
            success: true,
            message: "task updated successfully",
            result: task
        })
    }).catch(error => {
        res.status(400).json({
            success: false,
            message: "Something went wrong while updaing task",
            Error: error
        })
    })
}

exports.delete = async (req, res) => {
    await task.destroy({where: {id: req.params.taskId}})
    .then(task => {
        res.status(200).json({
            success: true,
            message: "task deleted successfully",
            result: task
        })
    }).catch(error => {
        res.status(400).json({
            success: false,
            message: "Something went wrong while deleting task",
            Error: error
        })
    })
}