const express = require('express')
const router = express.Router()
const { User } = require("../models")

router.get("/user", async (req, res) => {
    res.render("user.ejs")
})

router.get("/task", async (req, res) => {
    await User.findAll().then(user => {
        res.render("task.ejs", {user: user})
    })
})

module.exports = router


