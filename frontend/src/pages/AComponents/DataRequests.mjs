// All courses
const courseParser = (c) => {
    let prof1 = {"name": "", email: ""}
    let prof2 = {"name": "", email: ""}
    if (c.prof && c.prof !== "null"){
        prof1.name = c.prof
        prof1.email = c.profemail
    }
    if (c.oprof && c.oprof !== "null"){
        prof2.name = c.oprof
    }
    let ratings = 2.5
    if (c.ratingcount !== 0) {
        ratings = (2.5 + (2.5 * (c.ratingsum / c.ratingcount)))
    }
    let activities = c.schedule.split(',').map(a => {
        return {
            activity: a[0],
            day: a[1] === 'H'? 'Th': a[1],
            start: a.slice(2,7),
            end: a.slice(8)
        }
    })
    return {
        id: c._id,
        code: c.code,
        name: c.title,
        branch: c.department,
        credits: c.credits,
        prof1: prof1,
        prof2: prof2,
        ratings: ratings,
        activities: activities,
    }
}

const getAllCourses = () => { 
    // json request here
    
    return getMyCourses()
}

const getMyCourses = () => {
    // local storage get here
    return []
}

export { getMyCourses , getAllCourses, courseParser}