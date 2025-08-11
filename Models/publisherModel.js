const { default: mongoose, Schema } = require("mongoose");

publishersSchema = new mongoose.Schema({
    name:{type:String ,required:true , unique:true },
   location: String,
   yearEstablished: Number
})

module.exports=mongoose.model("publish" , publishersSchema)