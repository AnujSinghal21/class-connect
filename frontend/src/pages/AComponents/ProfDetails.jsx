/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'
import RateComment from './RateComment'
import axios from 'axios'
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
    console.log(data)
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
        comments: data.comment
      }
      const commentUrl = `/api/profs/comment?${encodeObject(commentParams)}`
      axios
      .put(commentUrl)
      .then((response) => {
        console.log(response)
      })
    }
  }
  return (
    <div className="p-3 m-3">
      <h1>{prof.name}</h1><hr/>
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
        <TabPane tabId="1">
          Tab1
        </TabPane>
        <TabPane tabId="2">
          <RateComment title="Share your experience" onSubmit={handleNewReview}/> 
        </TabPane>
      </TabContent>
    </div>
  )
}

export default ProfDetails