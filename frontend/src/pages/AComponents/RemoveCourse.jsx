import { Button } from "reactstrap"

/* eslint-disable react/prop-types */
// Needs remove course functionality!

function RemoveCourse(props) {
  const { myCourses, setMyCourses } = props
  const getTotalCredits = (courses) => {
    return 57
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
                {c.code} : {c.name}
              </div>
              <div>
                <Button size="sm" outline color="warning">
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