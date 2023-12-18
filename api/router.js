const express=require('express')
const api=require('./api.js')
const router=express.Router();

router.get('/courses', api.getCourses);
router.get('/course',api.getCourseData);
router.get('/profs', api.getProfs);
router.post('/courses', api.AddCourse);
router.post('/profs',api.AddProf);
router.put('/courses',api.addCourseComment);
router.put('/profs',api.addProfComment)

module.exports=router;