const express = require('express')
const router = express.Router()
const { User, task } = require("../models")

router.get("/user", async (req, res) => {
    res.render("user.ejs")
})

router.get("/task", async (req, res) => {
    await User.findAll().then(user => {
        res.render("task.ejs", {user: user})
    })
})

router.get("/alluser", async (req, res) => {
    await task.findAll({include : [{model:User}]}).then(task => {
        res.render("listofuser.ejs", {task: task})
    })
})

module.exports = router


