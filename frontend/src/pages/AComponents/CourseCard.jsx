/* eslint-disable react/prop-types */
import { Card, CardTitle, CardText, Button } from "reactstrap"

const Colors = ['#3498db','#2ecc71','#9b59b6','#e67e22','#008080','#f1c40f','#d98880','#e74c3c']
function CourseCard(props) {
  const course = props.course 
  const isMyCourse = props.myCourses.find(c => c.id === course.id) ? true: false
  const addCourse = () => {
    props.setMyCourses([...props.myCourses, course].map((c, i) => {
      return {...c, color: Colors[i]}
    }))
  }
  return (
    <div className="m-1">
      <Card
        body
      >
        <CardTitle tag="h5">
          {course.code} ({course.credits}) &nbsp; <span style={{fontSize : 12}}>{"⭐".repeat(Math.ceil(course.ratings))}{course.ratings.toFixed(1)}</span>
        </CardTitle>
        <CardText>
          {course.title}
        </CardText>
        <CardText >
          By {course.prof1.name}
          {course.prof2.name === "" ? <></> : <><br />And {course.prof2.name}</>}
        </CardText>
        <Button color="primary" disabled={isMyCourse} onClick={addCourse}>
          { isMyCourse? "Already Added" : "Add Course"}
        </Button>
      </Card>
    </div>
  )
}

export default CourseCard