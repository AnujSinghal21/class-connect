//ignore file for local testing

const getdocs=require('./api/mongoretrieve.js')

getdocs.getAllCourses().then(value=>{
    console.log(value);
});