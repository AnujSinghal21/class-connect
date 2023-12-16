const express=require('express')
const api=require('./api.js')
const router=express.Router();

router.get('/courses',api.getCourses);
router.get('/profs',api.getProfs);

module.exports=router;