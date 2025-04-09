const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())


app.get("/health-check",(req,res)=>{

    res.status(200).json({
        msg : "Look server is healthy "
    })
})
app.listen(3000, ()=>{
    console.log("server running on 3000");
    
})