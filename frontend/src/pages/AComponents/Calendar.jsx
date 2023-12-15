/* eslint-disable react/prop-types */
function convertDayToNumber(day) {
  switch (day) {
    case 'M':
      return 0;
    case 'T':
      return 1;
    case 'W':
      return 2;
    case 'Th':
      return 3;
    case 'F':
      return 4;
    default:
      return -1; // or handle invalid input as needed
  }
}

// From a list of courses, treat them as taken, need to update the calendar with the schedule 
const getDayWiseSchedule = (courses) => {
  let table =  [...Array(5)].map(() => [...Array(48)].map(() => []));
  const getNumberOfQuarters = (time) => {
    const startTime = new Date('1970-01-01T08:00:00');
    const endTime = new Date(`1970-01-01T${time}:00`);
    const millisecondsDifference = endTime - startTime;
    const quarters = Math.ceil(millisecondsDifference / (15 * 60 * 1000));
    return quarters;
  }
  courses.map(c => {
    c.lectures.map(l => {
      let d = convertDayToNumber(l.day)
      let s = getNumberOfQuarters(l.start)
      let e = getNumberOfQuarters(l.end)
      for (let i = s; i < e; i++){
        table[d][i].push({"course": c, "activity": `${c.code} (L)`})
      }
    })
    c.tutorials.map(l => {
      let d = convertDayToNumber(l.day)
      let s = getNumberOfQuarters(l.start)
      let e = getNumberOfQuarters(l.end)
      for (let i = s; i < e; i++){
        table[d][i].push({"course": c, "activity": `${c.code} (T)`})
      }
    })
    c.labs.map(l => {
      let d = convertDayToNumber(l.day)
      let s = getNumberOfQuarters(l.start)
      let e = getNumberOfQuarters(l.end)
      for (let i = s; i < e; i++){
        table[d][i].push({"course": c, "activity": `${c.code} (P)`})
      }
    })
  })

  let colCompressed = table.map((d) => {
    return d.map()
  })
  console.log(table[0])


}

function Calendar(props) {
  const courses = props.courses? props.courses: []
  const dws = getDayWiseSchedule(courses)
  // pehle day wise nikalna pdega
  // pehle process krte h saare courses, then 
  // for each slot -> get all the work 
  // 
  // fir render krenge 
  return (
    <div>
      
      Calendar here
    </div>
  )
}

export default Calendar