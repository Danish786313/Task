const express = require("express")
const app = express()
app.set('view engine', 'ejs')
require('dotenv').config()
app.use(express.json())
const cors = require('cors')
app.use(cors())
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerdoc = YAML.load('./api.yaml') 
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerdoc));

const taskroute = require('./routes/taskroute')
app.use('/api', taskroute)

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