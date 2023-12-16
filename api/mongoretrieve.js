const mongoose=require('mongoose');
const connect=require('../database/connect.js');
const {Course,Prof}=require('../database/models.js');

//The functions here return promises
//Use .then() to define a callback to the returned value
//The file is no longer needed

async function getAllCourses(){
    await connect();
    return await Course.find();
}

async function getAllProfs(){
    await connect();
    return await Prof.find();
}

module.exports.getAllCourses=getAllCourses;
module.exports.getAllProfs=getAllProfs;