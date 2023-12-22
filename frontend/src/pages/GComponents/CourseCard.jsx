/* eslint-disable react/prop-types */
import { Card, CardTitle, CardText, Button } from "reactstrap"

function CourseCard(props) {
  const course = props.course
  const rating = course.ratingcount === 0? 2.5 : course.ratingsum / course.ratingcount
  const openCourse = ()=>{
    window.open(`/courses?id=${course._id}`, '_self')
  }
  return (
    <div className="m-1">
      <Card
        body
      >
        <CardTitle tag="h5">
          {course.code}&nbsp;({course.credits})&nbsp; <span style={{fontSize : 12}}>{"⭐".repeat(Math.ceil(rating))}{rating.toFixed(1)}</span>
        </CardTitle>
        <CardText>
          {course.title} <br/>
          Semester: {course.semester} <br/>
          Taken by: {course.prof} 
        </CardText>
        <Button color="primary" onClick={openCourse}>
          View
        </Button>
      </Card>
    </div>
  )
}

export default CourseCard