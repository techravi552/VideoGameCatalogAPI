
const express = require("express")

const mongoose = require("mongoose")

const publish = require("./Models/publisherModel")

mongoose.connect("mongodb://127.0.0.1:27017/CatalogAPI")
.then(()=>{console.log("mongodb connect");
})
.catch(err => console.log("errore"))





const app= express()

app.use(express.json())

app.get("/" , (req, res)=>{
    res.send("create the video game API")
})

app.get("/api/publishers" , async (req , res)=>{
   const publishers = await publish.find()
   res.send(publishers)
})

app.post("/api/publishers" , async (req , res)=>{
    const publishers = await publish.create(req.body)
    res.send(publishers)
})

app.put("/api/publishers/:id" , async (req , res)=>{
    const publishers = await publish.findByIdAndUpdate(req.params.id , req.body , {new:true})
    res.send(publishers)
})

app.delete("/api/publishers/:id" , async (req , res)=>{
    const publishers = await publish.findByIdAndDelete(req.params.id)
    res.send("Delete..")
})






app.listen(3000 , ()=>{console.log("run the code http://localhost:3000/");
})