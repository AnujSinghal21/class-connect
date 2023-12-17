const data=require('../schedule-parser/courses.json')
const {Course}=require('../database/models.js');
const { response } = require('express');
const fetch=require('node-fetch');

let n=data.length

const year=2023;
const semester="ODD";
const URL="http://localhost:3000/api/courses"

let i=0;

function getCourseData(i){

    let department=data[i].branch;
    let code=data[i].code;
    let title=data[i].name;
    let prof=data[i].instructors[0].name;
    let profemail=data[i].instructors[0].email;
    let oprof=null;

    if(data[i].instructors.length>1){
        oprof=data[i].instructors[1].name;
    }

    prof=prof.replace("(I)","");
    profemail=profemail.replace(" (I)","");


    let lectures= data[i].lectures;
    let tutorials=data[i].tutorials;
    let labs=data[i].labs;

    let schedule=[];

    for(let j=0;j<lectures.length;j++){

        schedule.push(`C${lectures[j].day}${lectures[j].start}-${lectures[j].end}`);
    }
    for(let j=0;j<tutorials.length;j++){

        schedule.push(`E${tutorials[j].day}${tutorials[j].start}-${tutorials[j].end}`);
    }
    for(let j=0;j<labs.length;j++){

        schedule.push(`L${labs[j].day}${labs[j].start}-${labs[j].end}`);
    }

    //console.log("Schedule: ",schedule);

    let course_data={
        code:data[i].code,
        credits: data[i].credits,
        department:data[i].branch,
        title: title,
        prof:prof,
        oprof: oprof,
        profemail: profemail,
        year: year,
        semester: semester,
        schedule: schedule
    }

    //console.log(course_data);

    return course_data;

}

function getURLWithParams(data){

    let queryurl=URL+'?';

    for(const key in data){
        queryurl+=`${key}=${data[key]}&`;
    }

    return queryurl.slice(0,-1);
}

async function addCourse(urlwithparams,i){

    await fetch(urlwithparams,{method:"POST"});
    console.log("Added Course: ", data[i])
    console.log("Added: ",data[i].code);

}

for(let i=0;i<n;i++)
{
    let finalurl=getURLWithParams(getCourseData(i));
    addCourse(finalurl,i);
}