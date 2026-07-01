import express from 'express';

const app=express();



app.get("/",(req,res)=>{
res.send("this is the main hitpoint of the loadbalancer");
});






app.listen(80,()=>{
    console.log("ther server is running");
})