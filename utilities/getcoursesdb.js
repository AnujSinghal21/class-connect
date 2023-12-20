const {Course,Prof}= require('../database/models.js');
const fs= require('fs');
const mongoose=require('mongoose')

let connection=mongoose.connect(process.env.URI).then(
    ans=>{
        Course.find({}).then(value=>{return fs.writeFile("course_data_db.json",JSON.stringify(value),error=>{console.log(error)})});
    }
);