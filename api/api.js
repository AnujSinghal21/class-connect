const {Course,Prof}=require("../database/models.js")

//the api to getCourses using custom parameters
//if there are no parameters all the courses/profs are returned

module.exports.getCourses=(request,response)=>{
    let params=request.query;
    console.log(params);
    Course.find(params).then(value=>{response.send(value)}).catch(error=>{console.log(error)});

};
module.exports.getProfs=(request,response)=>{
    let params=request.query;
    console.log(params);
    Prof.find(params).then(value=>{response.send(value)}).catch(error=>{console.log(error)});
};


