/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import Waiting from "./AComponents/Waiting"
import Filters from "./AComponents/Filters"
import Calendar from "./AComponents/Calendar"
import { getMyCourses } from "./AComponents/Getters"
import Recommendation from "./AComponents/Recommendation"

function MainPage() {
  const [ filters, setFilters ] = useState({})
  const [ viewCourse, setViewCourse ] = useState("")
  const [ myCourses, setMyCourses ] = useState([])
  const [ dataLoaded, setDataLoaded ] = useState(false)
  useEffect(() => {
    setMyCourses(getMyCourses())
    setDataLoaded(true)
  }, [])
  if (!dataLoaded){
    return <Waiting message="Loading Content... Please wait or refresh"/>
  }
  return (
    <div className='border border-secondary d-flex flex-row align-items-stretch' style={{height: "100%"}}>
      <div className="flex-grow-1 d-flex flex-column">
        <div style={{ height: "30%"}}>
          filters
          <Filters />
        </div>
        <div className="flex-grow-1 border border-secondary">
          <Calendar courses={myCourses}/>
        </div>
      </div>
      <div>
        Recommendations and all this space I need more
        <Recommendation />
      </div>
      {/* <div className="d-flex align-items-stretch">
        <div className="col-8 m-0">
          <div className='border border-secondary' style={{ height: "30%", width: "100%"}}>
            Filters
          </div>
          <div className='border border-secondary' style={{ height: "200", width: "100%"}}>
            Calendar
          </div>
        </div>
        <div className="col">
          Recommendations
        </div>
      </div> */}
    </div>
  )
}

export default MainPage