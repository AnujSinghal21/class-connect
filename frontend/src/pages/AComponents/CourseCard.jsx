/* eslint-disable react/prop-types */
import { Card, CardTitle, CardText, Button } from "reactstrap"
function CourseCard(props) {
  const course = props.course 
  return (
    <div className="m-1">
      <Card
        body
      >
        <CardTitle tag="h5">
          {course.code} ({course.credits}) &nbsp; <span style={{fontSize : 12}}>{"⭐".repeat(Math.ceil(course.ratings))}{course.ratings.toFixed(1)}</span>
        </CardTitle>
        <CardText>
          {course.name}
        </CardText>
        <CardText >
          By {course.prof1.name}
          {course.prof2.name === "" ? <></> : <><br />And {course.prof2.name}</>}
        </CardText>
        <Button color="primary">
          Add Course
        </Button>
      </Card>
    </div>
  )
}

export default CourseCard