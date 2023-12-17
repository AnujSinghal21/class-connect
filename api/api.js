const { request, response } = require("express");
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

module.exports.AddCourse=(request,response)=>{
    let params=request.query;
    console.log(params);

    let new_course_data={
        code: params.code,
        department: params.department,
        title:params.title,
        credits: params.credits || 1,
        content:params.content || "",
        prof:params.prof,
        oprof:params.oprof || "",
        profemail: params.profemail,
        year: params.year,
        semester: params.semester,
        schedule: params.schedule || "Not Available",
        resources: params.resource || "Not Available",
        grades: params.grades || "Not Availalbe"
    };

    let new_course=new Course(new_course_data);

    try{
        new_course.save();
        response.status(200).send(params);
    }
    catch(error)
    {
        console.log(error);
        response.send(500).send("Internal Server Error");
    }
    
};

module.exports.AddProf=(request,response)=>{
    
    let params=request.query;

    console.log(params);

    let prof_data={
        name: params.name,
        department: params.department,
        email: params.email,
        comments: params.comments || ["None"],
        courses: params.courses || [],
    }

    let new_prof= new Prof(prof_data);

    try{
        new_prof.save();
        response.status(200).send(params);
    }
    catch(error)
    {
        console.log(error);
        response.status(500);
    }
};