const mongoose=require('mongoose')
const express=require('express')
const {Course,Prof}=require('./dbstruct.js')
//const connect=require('./connect.js')
const URI = "mongodb+srv://classconnect2023:dnzEcQDErO9QtM3E@classconnect.yiphpts.mongodb.net/classconnect2023?retryWrites=true&w=majority";
mongoose.connect(URI);
Course.createCollection();
Prof.createCollection();

// var testcourse=new Course;

// testcourse.code="TST123"
// testcourse.title="Testing your stuff"
// testcourse.prof="Goutam Das"
// testcourse.department="Who Cares"
// testcourse.profemail="goutam@samsung.com"
// testcourse.year=1900
// testcourse.semester="Winter"
// testcourse.Schedule=["MTWThF 10:00-11:00"]
// testcourse.save();



// var newProf = new Prof;

// newProf.rating = 0.0;
// newProf.department = "EE";
// newProf.email = 'ketan';
// newProf.name = 'Ketan Rajawat';
// newProf.save();
