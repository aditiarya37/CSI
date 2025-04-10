// const express = require("express")
// const cors = require("cors")

import express  from "express"
import cors from "cors";
import routes from "./routes"
const PORT  = 3000;
var bodyParser = require("body-parser")
const app = express()

app.use(express.json())
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use("/api",routes);


app.get("/health-check",(req:any,res:any)=>{

    res.status(200).json({
        msg : "Look server is healthy "
    })
})
app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
    
})