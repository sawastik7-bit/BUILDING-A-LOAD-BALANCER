import express from 'express';

const app=express();





app.get("/",(req,res)=>{
    console.log("server 2 handled request successfully");
});

app.get("/health",(req,res)=>{
    res.status(200).json("The server is healthy");
})



app.listen(8081,()=>{
    console.log("ther server is running");
})