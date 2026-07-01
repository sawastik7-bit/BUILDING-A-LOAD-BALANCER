import express from "express"
import axios from "axios"



const app=express();

const BackendServers=[
    "http://localhost:8081",
    "http://localhost:8082",
];

const DownServers=[];



//getting the next server

let currentServerIndex=0;

function getNextServer(){

    currentServerIndex++;

    if(currentServerIndex>=BackendServers.length) currentServerIndex=0;

return BackendServers[currentServerIndex];
}




// health check by looping
async function healthCheck(){
for(let i=0;i<BackendServers.length;i++){

    const result=await axios.get(`${BackendServers[i]}/health`);

    if(result.status!==200){
        DownServers.push(BackendServers[i]);
        BackendServers.splice(i,1);
        i--;
        console.log(`server ${BackendServers[i]} has been removed from the load balancer`);
    }
}
}

// on 15 minute time interval this function will run to check the health of the loadbalancer
setInterval(()=>{
healthCheck();
},15 * 60 * 1000);



// Now looping through the down server to check if any server is up again we should add it to the Backend Server array

while(DownServers.length>0){
setInterval(()=>{
for(let i=0;i<DownServers.length;i++){

    const checkDownServer=await axios.get(`${DownServers[i]}/health`);
    if(checkDownServer.status===200){
        BackendServers.push(DownServers[i]);
        DownServers.splice(i,1);
        i--;
        console.log(`server ${DownServers[i]} has been added to the load balancer`);
    }

}
},15 * 60 * 1000);
}


// now setting up the api endpoint for the load balancer



app.listen(80,()=>{
    console.log("The load balancer is running");
})