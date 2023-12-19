/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import Waiting from "./AComponents/Waiting"
import Filters from "./AComponents/Filters"
import Calendar from "./AComponents/Calendar"
import Recommendation from "./AComponents/Recommendation"
import { getMyCourses, getAllCourses } from "./AComponents/DataRequests.mjs"
import RemoveCourse from "./AComponents/RemoveCourse"

function MainPage() {
  const [ filters, setFilters ] = useState({})
  const [ myCourses, setMyCourses ] = useState([])
  const [ allCourses, setAllCourses ] = useState([])
  const [ dataLoaded, setDataLoaded ] = useState(false)
  useEffect(() => {
    setMyCourses(getMyCourses())
    setAllCourses(getAllCourses())
    setDataLoaded(true)
  }, [])
  if (!dataLoaded){
    return <Waiting message="Loading Content... Please wait or refresh"/>
  }
  return (
    <div className='border border-secondary d-flex flex-row align-items-stretch' style={{height: "100%"}}>
      <div className="flex-grow-1 d-flex flex-column">
        <div style={{ height: "35%", overflow : "auto"}}>
          <Filters filters={filters} setFilters={setFilters} myCourses={myCourses} />
          <RemoveCourse myCourses={myCourses} setMyCourses={setMyCourses} />
        </div>
        <div className="flex-grow-1 border border-secondary">
          <Calendar courses={myCourses}/>
        </div>
      </div>
      <div style={{minWidth: "25%"}}>
        <Recommendation filters={filters} allCourses={allCourses} setAllCourses={setAllCourses} />
      </div>
    </div>
  )
}

export default MainPage