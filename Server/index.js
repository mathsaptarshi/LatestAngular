const express = require("express");
const fs = require("fs");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./connection");
const PORT = 3000;
const app = express();
app.use(express.json())
app.use(cors())

// Connect to MongoDB
connectDB();

// Define Schema and Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  subject: String,
  description: String,
  date: { type: Date, default: Date.now }
}, { strict: false });

const Contact = mongoose.model("TestCrud", contactSchema, "TestCrud");

const userSchema = new mongoose.Schema({}, { strict: false });
const User = mongoose.model("Users", userSchema, "Users");

app.get("/",(req,res)=>{
  res.end("Welcome!")
})

app.get("/users", async (req,res)=>{
  try {
    const users = await User.find({});
    res.status(200).json({
      status: "ok",
      data: users
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message
    });
  }
})

// app.get("/users",(req,res)=>{
//   fs.readFile('./public/json/userList.json','utf8',(err,data)=>{
//     if(err){
//       res.status(5000).json({
//         status:"error"
//       })
//     }
//     else{
//       res.status(200).json({
//         status:"ok",
//         data: JSON.parse(data)
//       })
//     }
//   })
// }

app.post("/contact-us-save", async (req,res)=>{
  console.log(req.body)
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ status: "ok", message: "Data saved successfully" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
})

app.listen(PORT,()=>{
  console.log("Server Running at port::"+PORT)
})