const mongoose=require("mongoose");

const contactSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    phone:{type:String,required:true}
},
{ versionKey: false, timestamps: true }
);

const Contact=mongoose.model("contact",contactSchema);
module.exports=Contact;