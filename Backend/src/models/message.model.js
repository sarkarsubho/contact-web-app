const mongoose=require("mongoose");

const messageSchema=new mongoose.Schema({
    userId:{type:String,required:true},
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    phone:{type:String,required:true},
    time:{type:String,required:true},
    otp:{type:String,required:true},
},
{ versionKey: false, timestamps: true }
);

const Message=mongoose.model("message",messageSchema);
module.exports=Message;