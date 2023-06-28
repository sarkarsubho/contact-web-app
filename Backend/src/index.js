const express =require("express");
const cors=require("cors");
const app=express();

app.use(express.json());
app.use(cors())

const contactController=require("./controllers/contact.controller");
const messageController=require("./controllers/message.controller");
const travelController = require("./controllers/travel.controllers");

app.use("/tours", travelController);
app.use("/contacts",contactController);
app.use("/message",messageController);

app.use("/",(req,res)=>{
    res.status(200).send( `<h3 style="color:green;font-size:26px;margin:20px auto;">Welcome to Contact API</h3>`)
})

module.exports=app;