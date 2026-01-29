const express = require("express");
const fs = require("fs");
const cors = require("cors");
const PORT = 3000;
const app = express();
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
  res.end("Welcome!")
})

app.get("/users",(req,res)=>{
  fs.readFile('./public/json/userList.json','utf8',(err,data)=>{
    if(err){
      res.status(5000).json({
        status:"error"
      })
    }
    else{
      res.status(200).json({
        status:"ok",
        data: JSON.parse(data)
      })
    }
  })
})

app.listen(PORT,()=>{
  console.log("Server Running at port::"+PORT)
})