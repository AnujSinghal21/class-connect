/* eslint-disable react/prop-types */
function filterDailySchedule(courses, day){
  let activities = []
  courses.map((c) => {
    c.activities.map((l) => {
      if (l.day === day){
        activities.push({
          start: l.start,
          end: l.end,
          day: l.day,
          id: c.id,
          color: c.color,
          text: `${c.code} (${l.activity})`
        })
      }
    })
  })
  return activities
}
function getSchedule(courses){
  let schedule = []
  schedule.push(filterDailySchedule(courses, 'M'))
  schedule.push(filterDailySchedule(courses, 'T'))
  schedule.push(filterDailySchedule(courses, 'W'))
  schedule.push(filterDailySchedule(courses, 'Th'))
  schedule.push(filterDailySchedule(courses, 'F'))
  return schedule
}
function getTableLayout(activities){
  let rows = []
  const getNewRow = ()=>{
    let arr = []
    for (let i = 0; i < 48; i++){
      arr.push({cspan : 1, rspan: 1, activity : {}, text : ""})
    }
    return arr
  }
  const getNumberOfQuarters = (time) => {
    const startTime = new Date('1970-01-01T08:00:00');
    const endTime = new Date(`1970-01-01T${time}:00`);
    const millisecondsDifference = endTime - startTime;
    const quarters = Math.floor(millisecondsDifference / (15 * 60 * 1000));
    return quarters;
  }
  activities.map((a)=>{
    let mapped = false
    const sslot = getNumberOfQuarters(a.start)
    const eslot = getNumberOfQuarters(a.end)
    rows.map(r => {
      if (mapped) return
      let free = true
      for (let slot = sslot; slot < eslot; slot++){
        if (r[slot].text != "" || r[slot].cspan === 0){
          free = false
          break
        }
      }
      if (free){
        for (let slot = sslot; slot < eslot; slot++){
          r[slot].cspan = 0
        }
        mapped = true
        r[sslot].text = a.text
        r[sslot].activity = a
        r[sslot].cspan = (eslot - sslot)
      }
    })
    if (!mapped){
      rows.push(getNewRow())
      for (let slot = sslot; slot < eslot; slot++){
        rows[rows.length - 1][slot].cspan = 0
      }
      mapped = true
      rows[rows.length - 1][sslot].text = a.text
      rows[rows.length - 1][sslot].activity = a
      rows[rows.length - 1][sslot].cspan = (eslot - sslot)
    }
  })
  for (let r = 0; r < rows.length; r++){
    for (let slot = 0; slot < rows[r].length; slot++){
      if (rows[r][slot].text != ""){
        let r2 = r + 1
        let expandable = true
        for (r2 = r + 1; r2 < rows.length; r2++){
          for (let s = slot; s < slot + rows[r][slot].cspan; s++){
            if (rows[r2][s].text != ""){
              expandable = false
            }
          }
          if (!expandable) break
        }
        if ((!expandable) || r2 >= rows.length){
          r2--
        }
        rows[r][slot].rspan = r2 - r + 1
        for (let t = r + 1; t <= r2; t++){
          for (let s = slot; s < slot + rows[r][slot].cspan; s++){
            rows[t][s].rspan = 0
          }
        }
      }
    } 
  }
  return rows
}
function scheduleToCalendar(activities){
  const rows = getTableLayout(activities)
  return (
    <table style={{width: "100%", minHeight: 40}} className='text-center'>
      <tbody style={{width: "100%", height: "100%"}}>
        {
          rows.map((r, i) => {
            return (
            <tr key={`row-${i}`} style={{height: "100%"}}>
              {
                r.map((c, j) => {
                  if ((c.cspan !== 0 && c.rspan !==0)){
                    return (
                      <td
                      colSpan={c.cspan} 
                      rowSpan={c.rspan} 
                      key={`row-${i}-col-${j}`} 
                      style={{backgroundColor: c.activity.color, width: `${c.cspan * 2.083}%` }}
                      className={(j % 4 == 3 || c.cspan > 1)? "border-end border-secondary px-auto": ""}
                      >
                        <b style={{fontSize: 12}}> {c.text} </b> <br />
                        {c.cspan > 1? <span style={{fontSize: 11}}>{c.activity.start}-{c.activity.end}</span>: <></>}
                      </td>
                    )
                  }
                  return <td colSpan={0} key={j} style={{display: 'none'}}></td>
                })
              }
            </tr>)
          })
        }
      </tbody>
    </table>
  )
}
function Calendar(props) {
  const courses = props.courses? props.courses: []
  const schedule = getSchedule(courses)
  return (
    <div className="container-fluid">
      <table className="table table-light table-bordered border-secondary mt-2 mb-0">
        <thead>
          <tr>
            <th scope="col" style={{width: "10%"}} className="border-end">DAY</th>
            <th scope="col">08</th>
            <th scope="col">09</th>
            <th scope="col">10</th>
            <th scope="col">11</th>
            <th scope="col">12</th>
            <th scope="col">13</th>
            <th scope="col">14</th>
            <th scope="col">15</th>
            <th scope="col">16</th>
            <th scope="col">17</th>
            <th scope="col">18</th>
            <th scope="col">19</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" style={{width: "10%"}}>MON</th>
            <td colSpan={12} className="p-0">{scheduleToCalendar(schedule[0])}</td>
          </tr>
          <tr>
            <th scope="row" style={{width: "10%"}}>TUE</th>
            <td colSpan={12} className="p-0">{scheduleToCalendar(schedule[1])}</td>
          </tr>
          <tr>
            <th scope="row" style={{width: "10%"}}>WED</th>
            <td colSpan={12} className="p-0">{scheduleToCalendar(schedule[2])}</td>
          </tr>
          <tr>
            <th scope="row" style={{width: "10%"}}>THU</th>
            <td colSpan={12} className="p-0">{scheduleToCalendar(schedule[3])}</td>
          </tr>
          <tr>
            <th scope="row" style={{width: "10%"}}>FRI</th>
            <td colSpan={12} className="p-0">{scheduleToCalendar(schedule[4])}</td>
          </tr>
        </tbody>
      </table>
      <div style={{fontSize: 12}}>
        <i>
          L: Lecture, T: Tutorial, P: Practical/Lab
        </i>
      </div>
    </div>
  )
}

export default Calendar