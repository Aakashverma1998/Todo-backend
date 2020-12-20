const { json } = require("express")
const express = require("express")
const mongoose = require("mongoose")
const userrout = require("./routes/route")
const port = process.env.port || 4000

const app = express()
app.use(express.json())
app.use("/", userrout)

mongoose.connect("mongodb://localhost:27017/students",{ useUnifiedTopology: true , useNewUrlParser: true ,useFindAndModify:false} )
.then( ()=>console.log("connection is sucessfull......."))
.catch( (err)=>console.log(err))

app.listen(port,()=>console.log(`server is running on port ${port}`))

