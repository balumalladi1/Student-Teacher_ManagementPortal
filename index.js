const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv= require("dotenv");
const cors = require("cors");
const userroute = require("./Route/userRoute")
const studentroute = require("./Route/studentRoute")
const teacherroute = require("./Route/teacherRoute")
const bodyparser=require("body-parser")


dotenv.config()
app.use(cors())
Port= process.env.PORT || 4000;

app.listen(Port,()=>{
    console.log(`The app is connected to server ${Port}`)
})

mongoose.connect(process.env.MongoUrl)
    .then(()=>console.log("Connected to Mongo DB"))
    .catch((error)=>console.log(error))

app.use(bodyparser.json());

app.use("/register",userroute)
app.use("/student",studentroute)
app.use("/teacher",teacherroute)

app.use("/", (req,res)=>{
    res.send("Hi")
})
