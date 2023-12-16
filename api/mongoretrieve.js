const mongoose=require('mongoose');
const connect=require('../database/connect.js');
const {Course,Prof}=require('../database/models.js');

connect();

//The functions here have promises to return all courses and profs
//Use .then() to define a callback to the returned value

const getAllCourses=new Promise(async (resolve,reject)=>{
    let all=await Course.find();
    resolve(all);
});

const getAllProfs=new Promise(async (resolve,reject)=>{
    let all=await Prof.find();
    resolve(all);
});

module.exports.getAllCourses=getAllCourses;
module.exports.getAllProfs=getAllProfs;