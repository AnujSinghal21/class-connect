const express=require('express');
const connect=require('./database/connect.js');
const APIRouter=require('./api/router.js');
const dotenv=require('dotenv');
const cors=require('cors');
const bodyparser=require('body-parser');
const app=express();


dotenv.config();

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));

connect();

app.get('/',(req,res)=>{
    res.send("Hello World");
    res.end();
})

app.use('/api', APIRouter);
//console.log(typeof process.env.PORT);
app.listen(parseInt(process.env.PORT,10));