const { request, response } = require("express");
const {Course,Prof}=require("../database/models.js")

//all api methods are defined here

//getting all Courses for the home page
//no query parameters required
//Fields sent as response: id,title,code,department,credits,schedule,ratingsum,ratingcount
module.exports.getCourses=(request,response)=>{
    Course.find(request.query).select('title code department prof oprof credits schedule ratingsum ratingcount')
    .then(value=>{
        // let prelim_data={
        //     id: value._id,
        //     title: value.title,
        //     code: value.code,
        //     department: value.department,
        //     prof: value.prof,
        //     credits: value.credits,
        //     schedule: value.schedule,
        //     ratingsum: value.ratingsum,
        //     ratingcount: value.ratingcount
        // };
        // console.log(prelim_data);
        response.status(200).send(value);
    })
    .catch(error=>{console.log(error)});

};

//getting course specific data for the coures page
//id is taken from the "query" of the request
//responds with all the course data
module.exports.getCourseData=(request,response)=>{
    
    console.log(request.body);
    let id=request.query.id;
    Course.findById(id).then(value=>{
        response.status(200).send(value)
    })
    .catch(error=>{
        console.log(error);
        response.status(500).send(error);
    });
};

//getting all profs Data
module.exports.getProfs=(request,response)=>{
    let params=request.query;
    console.log(params);
    Prof.find(params)
    .then(value=>{
        response.status(200).send(value)
    })
    .catch(error=>{console.log(error)});
};

//adding a course
//values given as query
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
        semester: params.semester,
        schedule: params.schedule || "Not Available",
        resources: params.resource || "Not Available",
        grades: params.grades || "Not Availalbe",
        ratingsum: params.ratingsum,
        ratingcount: params.ratingcount
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

//adding a Professor
//values given as query
module.exports.AddProf=(request,response)=>{
    
    let params=request.query;

    console.log(params);

    let prof_data={
        name: params.name,
        department: params.department,
        email: params.email,
        comments: params.comments || [],
        courses: params.courses || [],
        ratingsum: 0,
        ratingcount: 0
    }

    let new_prof= new Prof(prof_data);

    try{
        new_prof.save();
        response.status(200).send(params);
    }
    catch(error)
    {
        console.log(error);
        response.status(406).send("Something went wrong");
    }
};

//adding a comment to a course
//comment received as request query
module.exports.addCourseComment=async (request,response)=>{

    let id=request.query.id;

    let updated_course= await Course.findByIdAndUpdate(id,{$push:{comments: request.query.comments}},{new: true});
    response.status(200).send(updated_course);
};

//adding a comment to a professor
//comment received as request query
module.exports.addProfComment=async (request,response)=>{

    let id=request.query.id;

    let updated_prof= await Prof.findByIdAndUpdate(id,{$push:{comments: request.query.comments}},{new: true});
    response.status(200).send(updated_prof);
};

//update course ratings
//send as query
module.exports.rateCourse=async (request,response)=>{
    let params=request.query;

    //console.log(params);

    let check_exist=await Course.find({_id: params.id, ratings: {$elemMatch: {ip: request.ip}}});
    console.log(check_exist);
    if(check_exist.length==0)
    {
        final_value= await Course.findByIdAndUpdate(params.id,{$inc:{ ratingsum: params.ratingsum, ratingcount: 1}, $push:{ratings:{ rating: params.ratingsum, ip: request.ip}}},{new: true});
        response.status(200).send(final_value);
    }
    else
    {
        response.status(403).send("Rating is already given");
    }
    //console.log(final_value);
    
}

//update prof ratings
//send as query
module.exports.rateProf=async (request,response)=>{
    let params=request.query;

    //console.log(params);

    let check_exist=await Prof.find({_id: params.id, ratings: {$elemMatch: {ip: request.ip}}});
    console.log(check_exist);
    if(check_exist.length==0)
    {
        final_value= await Prof.findByIdAndUpdate(params.id,{$inc:{ ratingsum: params.ratingsum, ratingcount: 1}, $push:{ratings:{ rating: params.ratingsum, ip: request.ip}}},{new: true});
        response.status(200).send(final_value);
    }
    else
    {
        response.status(403).send("Rating is already given");
    }
}