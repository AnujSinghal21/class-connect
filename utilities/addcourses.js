const data=require('../schedule-parser/courses.json')
const {Course}=require('../database/models.js');
const { response } = require('express');
const fetch=require('node-fetch');

let n=data.length

const semester="23-24 EVEN";
const URL="http://localhost:3000/api/courses"

let i=0;

//Th=> H done
//Tu=> T done
//Course=> L done
//Tut=> T done
//Labs=> P done

function generateScheduleString(lectures,tutorials,labs){

    let schedule="";

    for(let i=0;i<lectures.length;i++)
    {
        schedule+='L';

        if(lectures[i].day=='Th')
        {
            schedule+='H';
        }
        else if(lectures[i].day=='Tu')
        {
            schedule+='T';
        }
        else
        {
            schedule+=lectures[i].day;
        }

        schedule+=`${lectures[i].start}-${lectures[i].end},`;
    }

    for(let i=0;i<tutorials.length;i++)
    {
        schedule+='T';

        if(tutorials[i].day=='Th')
        {
            schedule+='H';
        }
        else if(tutorials[i].day=='Tu')
        {
            schedule+='T';
        }
        else
        {
            schedule+=tutorials[i].day;
        }

        schedule+=`${tutorials[i].start}-${tutorials[i].end},`;
    }

    for(let i=0;i<labs.length;i++)
    {
        schedule+='P';

        if(labs[i].day=='Th')
        {
            schedule+='H';
        }
        else if(labs[i].day=='Tu')
        {
            schedule+='T';
        }
        else
        {
            schedule+=labs[i].day;
        }

        schedule+=`${labs[i].start}-${labs[i].end},`;
    }

    return schedule.slice(0,-1);
}

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

   let schedule=generateScheduleString(lectures,tutorials,labs);

    let course_data={
        code:data[i].code,
        credits: data[i].credits,
        department:data[i].branch,
        title: title,
        prof:prof,
        oprof: oprof,
        profemail: profemail,
        semester: semester,
        schedule: schedule,
        ratingsum: 0,
        ratingcount: 0
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
    //console.log("Added Course: ", data[i])
    console.log("Added: ",data[i].code);

}

for(let i=0;i<n;i++)
{
    let finalurl=getURLWithParams(getCourseData(i));
    addCourse(finalurl,i);
}