const express=require('express')
const api=require('./api.js')
const router=express.Router();

router.get('/courses', api.getCourses);
router.get('/profs', api.getProfs);
router.post('/courses', api.AddCourse);
router.post('/profs',api.AddProf);

module.exports=router;