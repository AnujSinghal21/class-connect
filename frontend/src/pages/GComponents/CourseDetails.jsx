/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'
import axios from 'axios'
import RateComment from '../AComponents/RateComment'
import Comment from '../AComponents/Comment'
function CourseDetails(props) {
  const course = props.course
  const rating = course.ratingcount === 0? 2.5 : course.ratingsum / course.ratingcount
  const [ tab, setTab] = useState(1)
  let activities = course.schedule.split(',').map(a => {
    return {
        activity: a[0],
        day: a[1] === 'H'? 'Th': a[1],
        start: a.slice(2,7),
        end: a.slice(8)
    }
  })
  const encodeObject = (obj) => {
    const queryParams = new URLSearchParams();
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        queryParams.append(key, obj[key]);
      }
    }
    return queryParams.toString()
  }
  const handleNewReview = (data)=>{
    if (data.rating > 0 && data.rating <= 5){
      const ratingParams = {
        id: course._id,
        ratingsum: data.rating
      }
      const ratingUrl = `/api/courses/rate?${encodeObject(ratingParams)}`
      axios
      .post(ratingUrl)
      .then((response) => {
        console.log(response)
      })
    }
    if (data.comment !== ""){
      const commentParams = {
        id: course._id,
        comment: data.comment
      }
      const commentUrl = `/api/courses?${encodeObject(commentParams)}`
      axios
      .put(commentUrl)
      .then((response) => {
        console.log(response)
      })
    }
  }
  return (
    <div className="p-3 m-3">
      <div className='d-flex'>
        <h1 className='flex-grow-1'>
          {course.code} - {course.title}
        </h1>
        <div>
          <a href="/courses" target='_self' className='text-decoration-none fs-2'>&#8592;</a>
        </div>
      </div>
      <hr/>
      <p className="fs-4">
        Offered in : {course.semester} <br/>
        Department : {course.department} <br/>
        Credits : {course.credits} <br/>
        Rating : &nbsp; <span>{rating.toFixed(1)}{"⭐".repeat(Math.ceil(rating))}</span> <br/>
        Instructor : <a href={`/profs?email=${course.profemail}`}>{course.prof}</a> <br/>
        {course.oprof === "null" ? "": `Other Instructor : ${course.oprof}` }
      </p>
      <p className='fs-4'>
        Timings: 
        <ul>
          {activities.map((a, i) => {
            return (
              <li key={i}>{a.activity}: {a.day}{a.start}-{a.end}</li>
            )
          })}
        </ul>
      </p>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={tab===1? "active": ""}
            onClick={() => setTab(1)}
          >
            Reviews & Comments
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={tab===2? "active": ""}
            onClick={() => setTab(2)}
          >
            Add a review
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={`${tab}`}>
        <TabPane tabId="1"  style={{maxHeight: "50vh", overflow:"auto"}}>
          <div className='m-2 p-3'>
            <div className='text-center fst-italic'>
              {course.comments.length === 0
              ? "No reviews yet, be the first one to write a review."
              : `${course.comments.length} comment(s)`
              } 
            </div>
            {course.comments.map((c, i) => {
              return (<Comment msg={c.comment} key={i} />)
            })}
          </div>
        </TabPane>
        <TabPane tabId="2">
          <RateComment title="Share your experience" onSubmit={handleNewReview}/> 
        </TabPane>
      </TabContent>
    </div>
  )
}

export default CourseDetails