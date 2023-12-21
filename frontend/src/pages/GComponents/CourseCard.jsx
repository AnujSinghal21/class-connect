/* eslint-disable react/prop-types */
import { Card, CardTitle, CardText, Button } from "reactstrap"

function CourseCard(props) {
  const course = props.course
  const rating = course.ratingcount === 0? 2.5 : course.ratingsum / course.ratingcount
  const openCourse = ()=>{
    window.open(`/courses?code=${course.email}`, '_self')
  }
  return (
    <div className="m-1">
      <Card
        body
      >
        <CardTitle tag="h5">
          {course.title}&nbsp; <span style={{fontSize : 12}}>{"⭐".repeat(Math.ceil(rating))}{rating.toFixed(1)}</span>
        </CardTitle>
        <CardText>
          {course.credits} <br/>
          {course.department} <br/>
          {course.prof} 
        </CardText>
        <Button color="primary" onClick={openCourse}>
            View
        </Button>
      </Card>
    </div>
  )
}

export default CourseCard