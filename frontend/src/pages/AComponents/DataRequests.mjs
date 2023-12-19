// All courses
// const getAllCoursesURL = ""
const Colors = ['#3498db','#2ecc71','#9b59b6','#e67e22','#e74c3c','#008080','#f1c40f', '#d98880', '#FFFFFF']
const courseParser = (c, i) => {
    let activities = []
    c.lectures.map((l) => {
        activities.push({
            activity: 'L',
            day: l.day,
            start: l.start,
            end: l.end
        })
    })
    c.tutorials.map((l) => {
        activities.push({
            activity: 'T',
            day: l.day,
            start: l.start,
            end: l.end
        })
    })
    c.labs.map((l) => {
        activities.push({
            activity: 'P',
            day: l.day,
            start: l.start,
            end: l.end
        })
    })
    return {
        id: c.SNO,
        code: c.code,
        name: c.name,
        branch: c.branch,
        credits: 9,
        prof1: c.instructors[0],
        prof2: (c.instructors.length > 1? c.instructors[1]: ""),
        ratings: Math.floor(Math.random()*5.1),
        activities: activities,
        color: Colors[i]
    }
}

const getAllCourses = () => { 
    // json request here
}

const getMyCourses = () => {
    // local storage get here
    const courses = [
        {
            "SNO": 216,
            "branch": "CSE",
            "name": "COMPILER DESIGN(CS335A)",
            "code": "CS335A",
            "slotName": "OE-1",
            "instructors": [
                {
                    "name": "Swarnendu Biswas(I)",
                    "email": "swarnendu@iitk.ac. in (I)"
                }
            ],
            "lectures": [
                {
                    "day": "M",
                    "start": "09:00",
                    "end": "10:00"
                },
                {
                    "day": "W",
                    "start": "09:00",
                    "end": "10:00"
                },
                {
                    "day": "F",
                    "start": "09:00",
                    "end": "10:00"
                }
            ],
            "tutorials": [],
            "labs": [
                {
                    "day": "M",
                    "start": "14:00",
                    "end": "17:00"
                },
                {
                    "day": "Th",
                    "start": "14:00",
                    "end": "17:00"
                }
            ]
        },
        {
            "SNO": 219,
            "branch": "CSE",
            "name": "COMPUTER NETWORKS(CS425A)",
            "code": "CS425A",
            "slotName": "DE-3",
            "instructors": [
                {
                    "name": "Amitangshu Pal(I)",
                    "email": "amitangshu@iitk.ac .in (I)"
                }
            ],
            "lectures": [
                {
                    "day": "T",
                    "start": "12:00",
                    "end": "13:15"
                },
                {
                    "day": "W",
                    "start": "12:00",
                    "end": "13:15"
                }
            ],
            "tutorials": [],
            "labs": []
        },
        {
            "SNO": 340,
            "branch": "EE",
            "name": "INTRODUCTION TO REINFORCEMENT LEARNING(EE675)",
            "code": "EE675",
            "slotName": "OE-8",
            "instructors": [
                {
                    "name": "Subrahmanya Peruru(I)",
                    "email": "swamyp@iitk.ac.in (I)"
                }
            ],
            "lectures": [
                {
                    "day": "M",
                    "start": "15:30",
                    "end": "17:00"
                },
                {
                    "day": "W",
                    "start": "15:30",
                    "end": "17:00"
                }
            ],
            "tutorials": [],
            "labs": []
        },
        {
            "SNO": 226,
            "branch": "CSE",
            "name": "RANDOMIZED ALGORITHMS(CS648)",
            "code": "CS648",
            "slotName": "DE-2",
            "instructors": [
                {
                    "name": "SURENDER BASWANA (I)",
                    "email": "sbaswana@iitk.ac.i n (I)"
                }
            ],
            "lectures": [
                {
                    "day": "T",
                    "start": "10:30",
                    "end": "11:45"
                },
                {
                    "day": "Th",
                    "start": "12:00",
                    "end": "13:15"
                }
            ],
            "tutorials": [],
            "labs": []
        },
        {
            "SNO": 428,
            "branch": "HSS",
            "name": "SOCIAL COGNITION(PSY468A)",
            "code": "PSY468A",
            "slotName": "HSS 2- 3",
            "instructors": [
                {
                    "name": "SHIKHA DIXIT (I)",
                    "email": "shikha@iitk.ac.in (I)"
                }
            ],
            "lectures": [
                {
                    "day": "W",
                    "start": "11:00",
                    "end": "12:00"
                },
                {
                    "day": "Th",
                    "start": "11:00",
                    "end": "12:00"
                },
                {
                    "day": "F",
                    "start": "11:00",
                    "end": "12:00"
                }
            ],
            "tutorials": [],
            "labs": []
        },
        {
            "SNO": 218,
            "branch": "CSE",
            "name": "UG PROJECT (UGP- II)(CS396A)",
            "code": "UGP- II)(CS396A",
            "slotName": "SLOT- Blank",
            "instructors": [
                {
                    "name": "DUGCCSE (I)",
                    "email": "dugc_cse@iitk.ac.in (I)"
                }
            ],
            "lectures": [],
            "tutorials": [],
            "labs": []
        }           
    ]
    return courses.map((c, i) => courseParser(c, i))
}

export { getMyCourses , getAllCourses}