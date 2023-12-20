/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import axios from "axios"
import Waiting from "./AComponents/Waiting"
import Filters from "./AComponents/Filters"
import Calendar from "./AComponents/Calendar"
import Recommendation from "./AComponents/Recommendation"
import { getMyCourses, courseParser } from "./AComponents/DataRequests.mjs"
import RemoveCourse from "./AComponents/RemoveCourse"

function MainPage() {
  const [ filters, setFilters ] = useState({})
  const [ myCourses, setMyCourses ] = useState([])
  const [ allCourses, setAllCourses ] = useState([])
  const [ dataLoaded, setDataLoaded ] = useState(false)
  const baseUrl = '/api/courses'
  useEffect(() => {
    axios
    .get(baseUrl)
    .then(response => {
      if (parseInt(response.status) === 200){
        const courseData = response.data.map((c) => courseParser(c))
        setAllCourses(courseData)
        setDataLoaded(true)
      }else{
        alert("Could not load data")
      }
    }).catch((err) => {
      alert("Could not load data")
      console.log(err)
    })
    setMyCourses(getMyCourses())
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
        <Recommendation filters={filters} allCourses={allCourses} myCourses={myCourses} setMyCourses={setMyCourses} />
      </div>
    </div>
  )
}

export default MainPage