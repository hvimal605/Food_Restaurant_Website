const express = require('express');

const app = express()
const port = 5000;
const mongoose = require('mongoose')
require('./models/User')
require('./models/Card')
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/createPost'))





mongoose.connect("mongodb url");

mongoose.connection.on("connected", () => {
    console.log("successfully connected to mongo")
})

mongoose.connection.on("error", () => {
    console.log("not connected to mongodb")
})



app.listen(port, () => {
    console.log("server is running on port" + " " + port)

})

app.get('/',(req,res)=>{
    res.send("hello")
})
