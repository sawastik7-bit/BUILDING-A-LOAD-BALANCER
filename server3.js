import express from 'express';

const app=express();


app.get("/",(req,res)=>{
res.send("this is the server 2 for incoming requests");
})
app.get("/health",(req,res)=>{
    res.status(200).json("The server is healthy");
})

app.listen(8082,()=>{
    console.log("ther server is running");
})