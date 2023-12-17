const express=require('express');
const connect=require('./database/connect.js');
const APIRouter=require('./api/router.js');
const cors=require('cors');
const app=express();

app.use(cors());

connect();

app.get('/',(req,res)=>{
    res.send("Hello World");
    res.end();
})

app.use('/api', APIRouter);
app.listen(3000);

