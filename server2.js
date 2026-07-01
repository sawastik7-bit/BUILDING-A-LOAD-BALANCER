import express from 'express';

const app=express();





app.get("/",(req,res)=>{
    console.log("this is the server1 for incoming request");
});

app.get("/health",(req,res)=>{
    res.status(200).json("The server is healthy");
})



app.listen(8081,()=>{
    console.log("ther server is running");
})