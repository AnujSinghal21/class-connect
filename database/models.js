const mongoose=require('mongoose')

const CourseSchema= new mongoose.Schema({
    code:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: false
    },
    prof:{
        type: String,
        required: true
    },
    oprof:{
        type: String,
        required: false,
        default: "none"
    },
    profemail:{
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
    semester:{
        type: String,
        required: true
    },
    schedule:{
        type: [String],
        required: true
    },
    resources: String,
    grades: String

})

const ProfSchema= new mongoose.Schema({
    rating:{
        type: Number,
        required: false
    },
    department:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    comments:{
        type: [String],
        required: false,
        default: []

    },
    courses:{
        type: [String],
        required: false

    }
})


var Prof = mongoose.model('Professors',ProfSchema);
var Course= mongoose.model('Course',CourseSchema);

module.exports.Course=Course;
module.exports.Prof=Prof;
