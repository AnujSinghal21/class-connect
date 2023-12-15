const mongoose=require('mongoose');
const mconnect=require('./connect.js');
const models=require('./models.js');

let course=models.Course;
let prof=models.Prof;

async function connect(){
    let host= await mconnect();
}

// connect before starting to access entries
connect();

//could not figure out the db.collection('name of collection').insert('data) syntax
let db=mongoose.connection;


// the following is the correct syntax to add entries in the professors table(required fields kept only):

 let test_prof_data={
     department:"Test",
     email:"test@test.com",
     name:"test test"
 };

 let test_prof=new prof(test_prof_data);

 test_prof.save();


 // the following is the correct syntax to add entries in the courses table(required fields kept only):

let test_course_data={
    code: "TST101",
    department: "TST",
    title: "Intro to Syntax in Mongoose",
    prof:"StackExchange and Docs",
    profemail: "stack@mongoose.docs",
    year: 2023,
    semester: "winter",
    schedule:["All day every day"]
}

let test_course=new course(test_course_data)

test_course.save();

setTimeout(()=>{
    console.log("Test Entries Created");
    process.exit();
},10000);

