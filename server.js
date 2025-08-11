
const express = require("express")

const mongoose = require("mongoose")

const publish = require("./Models/publisherModel")
const Game = require("./Models/gameModel")

mongoose.connect("mongodb://127.0.0.1:27017/CatalogAPI")
.then(()=>{console.log("mongodb connect");
})
.catch(err => console.log("errore"))





const app= express()

app.use(express.json())

midilvear = (req, res, next) => {
  console.log("requst timeSetup")
  next();
};

app.use(midilvear)

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



app.get("/api/games" , async (req , res)=>{
   const games = await Game.find()
   res.send(games)
})


app.post("/api/games" , async (req , res)=>{
    const games = await Game.create(req.body)
    res.send(games)
})

app.put("/api/games/:id" , async (req , res)=>{
    const games = await Game.findByIdAndUpdate(req.params.id , req.body , {new:true})
    res.send(games)
})

app.delete("/api/games/:id" , async (req , res)=>{
    const games = await Game.findByIdAndDelete(req.params.id)
    res.send("Delete..")
})

app.listen(3000 , ()=>{console.log("run the code http://localhost:3000/");
})