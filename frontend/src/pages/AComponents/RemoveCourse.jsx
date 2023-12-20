import { Button } from "reactstrap"

/* eslint-disable react/prop-types */
// Needs remove course functionality!

function RemoveCourse(props) {
  const { myCourses, setMyCourses } = props
  const getTotalCredits = (courses) => {
    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
    return totalCredits
  }
  const removeThisCourse = (c) => {
    setMyCourses(myCourses.filter((x) => x.id !== c.id))
  }
  return (
    <div>
      <h4 className="bg-light px-2 m-0" style={{fontSize: 14}}>Your Courses: ({getTotalCredits(myCourses)} credits)</h4> 
      <div className="d-flex flex-wrap justify-content-evenly">
        {myCourses.map((c, i) => {
          return (
            <div key={i} 
            style={{backgroundColor: c.color, width: "30%", fontSize: 11}} 
            className="rounded m-1 p-1 text-wrap fw-bold d-flex align-items-stretch"
            >
              <div className="flex-grow-1">
                {c.code} : {c.name} ({c.credits})
              </div>
              <div>
                <Button size="sm" outline color="warning" onClick={() => removeThisCourse(c)}>
                  &#10060;
                </Button>
                </div>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default RemoveCourse