const express =require("express")
const app =express()

const bodyParser =require("body-parser")
const cors =require("cors")

const port =4000

const mongoose =require("mongoose")

const config =require("./DB")

const businessRoute = require("./business.route")



mongoose.Promise=global.Promise

mongoose.connect(config.DB,{useNewUrlParser:true})
.then(
()=>{console.log("Database is Connected")},err =>{console.log("Cannot Connect to database : "+err)})





app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.use("/business",businessRoute)



app.listen(port,function() {
    console.log("server is running on port 4000: ",port)
})