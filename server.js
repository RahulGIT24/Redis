const express = require('express');
const axios = require('axios').default;
const client = require('./client');

const app = express();

app.get('/',async(req,res)=>{
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
    const cache = await client.get('todos');
    if(cache){
        return res.json(JSON.parse(cache));
    } 
    await client.set('todos',JSON.stringify(data));
    await client.expire('todos',30);
    return res.json(data);
})

app.listen(9000,()=>{
    console.log("Server is listining on port 9000")   
})