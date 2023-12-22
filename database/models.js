const mongoose=require('mongoose')

const CourseSchema= new mongoose.Schema({
    code:{
        type: String,
        required: true
    },
    credits:{
        type: Number,
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
    semester:{
        type: String,
        required: true
    },
    schedule:{
        type: String,
        required: true
    }, 
    resources: String,
    grades: String,
    ratingsum: Number,
    ratingcount: Number,
    ratings: [{
        rating: Number,
        ip: String
    }],
    comments: [{
        comment: String,
        ip: String
    }]

});

const ProfSchema= new mongoose.Schema({
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
    },
    ratingsum: Number,
    ratingcount: Number,
    ratings: [{
        rating: Number,
        ip: String
    }],
    comments: [{
        comment: String,
        ip: String
    }]
})


var Prof = mongoose.model('Professors',ProfSchema);
var Course= mongoose.model('Course',CourseSchema);

module.exports.Course=Course;
module.exports.Prof=Prof;
