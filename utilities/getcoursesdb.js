const {Course,Prof}= require('../database/models.js');
const fs= require('fs');
const mongoose=require('mongoose')
const dotenv=require('dotenv');
dotenv.config({path : "../.env"});

let connection=mongoose.connect(process.env.DEVURI).then(
    ans=>{
        Course.find({}).then(value=>{return fs.writeFile("course_data_db.json",JSON.stringify(value),error=>{console.log(error)})});
    }
);