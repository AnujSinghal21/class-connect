//the file explicitly creates a db on the Mongo Server
//to be run only once
//the file is run already and execution is not needed again

const mongoose=require('mongoose')
const connect=require('./connect.js')
const {Course,Prof}=require('./models.js')

let connection= connect();

Course.createCollection();
Prof.createCollection();

setTimeout(()=>{
    console.log("Collections Created on server");
    process.exit();
},10000);