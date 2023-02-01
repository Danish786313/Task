const express = require("express")
const app = express()
app.set('view engine', 'ejs')
require('dotenv').config()
app.use(express.json())

const cors = require('cors')
app.use(cors())

app.set('view engin', 'ejs')

const views = require('./routes/view')
const taskroute = require('./routes/taskroute')
const user = require("./routes/userroute")

app.use('/api', taskroute)
app.use("/api", user)
app.use("/views", views)
app.get("/home", (req, res) => {
    res.status(200).json({
        successe : true,
        message: 'you are in home page'
    })
})
const port = (process.env.PORT || 4000)
app.listen(port, async () => {
    console.log(`Server is listening On http://localhost:${port}`)
})