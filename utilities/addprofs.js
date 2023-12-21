const { get } = require('mongoose');
const {Prof}=require('../database/models.js');
const courses= require('./course_data_db.json');
const fetch= require('node-fetch');

const URL="http://localhost:3000/api/profs";
let n=courses.length;

function getFindURL(email){
    let urlwithquery=`${URL}?email=${email}`;

    return urlwithquery;
}

function getAddURL(coursedata){
    let urlwithquery=`${URL}?`;
    urlwithquery+=`name=${coursedata.prof}&`;
    urlwithquery+=`email=${coursedata.profemail}&`;
    urlwithquery+=`department=${coursedata.department}&`;

    return urlwithquery.slice(0,-1);
}

async function addProftoDB(course_data){
    let added_check= await fetch(getFindURL(course_data.profemail),{method: "GET"});
    let data= await added_check.json();
    console.log(data);
    let length=await data.length;

    if(await (await length==0))
    {
        await fetch(getAddURL(course_data),{method: "POST"});
        console.log("Added: ", course_data.profemail);
    }
    else
    {
        console.log("Already Present: ",data[0].name);
    }
}

for(let i=0;i<n;i++)
{
    setTimeout(()=>{addProftoDB(courses[i])},1000*i);
}