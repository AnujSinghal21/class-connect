const getAllCourses = () => {

}
const getMyCourses = () => {
    return [
        {
            "SNO": 1,
            "branch": "AE",
            "name": "INCOMPRESSIBLE AERODYNAMICS(AE211)",
            "code": "AE211",
            "slotName": "OE-1",
            "instructors": [
                {
                    "name": "Arun Perumal(I)",
                    "email": "akp@iitk.ac.in (I)"
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
            "labs": []
        },
        {
            "SNO": 2,
            "branch": "AE",
            "name": "INTRODUCTION TO VIBRATIONS(AE233M)",
            "code": "AE233M",
            "slotName": "4-3-1",
            "instructors": [
                {
                    "name": "ABHISHEK (I)",
                    "email": "abhish@iitk.ac.in (I)"
                }
            ],
            "lectures": [
                {
                    "day": "T",
                    "start": "12:00",
                    "end": "13:00"
                },
                {
                    "day": "Th",
                    "start": "12:00",
                    "end": "13:00"
                },
                {
                    "day": "F",
                    "start": "12:00",
                    "end": "13:00"
                }
            ],
            "tutorials": [],
            "labs": []
        },
        {
            "SNO": 3,
            "branch": "AE",
            "name": "EXPERIMENTS IN AEROSPACE ENGINEERING- I(AE251A)",
            "code": "AE251A",
            "slotName": "4-2",
            "instructors": [
                {
                    "name": "Tufan Guha(I)",
                    "email": "tkguha@iitk.ac.in (I)"
                }
            ],
            "lectures": [
                {
                    "day": "T",
                    "start": "12:00",
                    "end": "13:00"
                },
                {
                    "day": "F",
                    "start": "12:00",
                    "end": "13:00"
                }
            ],
            "tutorials": [],
            "labs": []
        },
        {
            "SNO": 4,
            "branch": "AE",
            "name": "EXPERIMENTS IN AEROSPACE ENGINEERING- I(AE252M)",
            "code": "AE252M",
            "slotName": "4-2",
            "instructors": [
                {
                    "name": "Tufan Guha(I)",
                    "email": "tkguha@iitk.ac.in (I)"
                },
                {
                    "name": "KAMAL PODDAR (O)",
                    "email": "kamal@iitk.ac.in (O)"
                }
            ],
            "lectures": [
                {
                    "day": "T",
                    "start": "12:00",
                    "end": "13:00"
                },
                {
                    "day": "F",
                    "start": "12:00",
                    "end": "13:00"
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
                    "day": "W",
                    "start": "14:00",
                    "end": "17:00"
                }
            ]
        }        
    ]
}

export {getAllCourses, getMyCourses}
