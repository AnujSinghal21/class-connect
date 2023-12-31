/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'
import axios from 'axios'
import RateComment from './RateComment'
import Comment from './Comment'
function ProfDetails(props) {
  const prof = props.prof
  const rating = prof.ratingcount === 0? 2.5 : prof.ratingsum / prof.ratingcount
  const [ tab, setTab] = useState(1)
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
        id: prof._id,
        ratingsum: data.rating
      }
      const ratingUrl = `/api/profs/rate?${encodeObject(ratingParams)}`
      axios
      .post(ratingUrl)
      .then((response) => {
        console.log(response)
      })
    }
    if (data.comment !== ""){
      const commentParams = {
        id: prof._id,
        comment: data.comment
      }
      const commentUrl = `/api/profs?${encodeObject(commentParams)}`
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
          {prof.name}
        </h1>
        <div>
          <a href="/profs" target='_self' className='text-decoration-none fs-2'>&#8592;</a>
        </div>
      </div>
      <hr/>
      <p className="fs-3">
        Department : {prof.department} <br/>
        Rating : &nbsp; <span>{rating.toFixed(1)}{"⭐".repeat(Math.ceil(rating))}</span> <br/>
        Email: <a href={`mailto:${prof.email}`}>{prof.email}</a>
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
              {prof.comments.length === 0
              ? "No reviews yet, be the first one to write a review."
              : `${prof.comments.length} comment(s)`
              } 
            </div>
            {prof.comments.map((c, i) => {
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

export default ProfDetails