/* eslint-disable react/prop-types */
import CourseCard from "./CourseCard"
function applyFilters(filters, allCourses){
  return allCourses
}

function Recommendation(props) {
  const {filters, allCourses, setAllCourses } = props
  const viewCourses = applyFilters(filters, allCourses)
  return (
    <div style={{maxHeight: "100vh"}} className="overflow-auto">
      <p className='fw-bold mt-2 mb-0'>{viewCourses.length} courses found.</p><hr />
      <div className='overflow-auto d-flex flex-column'>
        {viewCourses.map((c, i) => {
          return (
            <CourseCard course={c} key={i} setAllCourses={setAllCourses} />
          )
        })}
      </div>
    </div>
  )
}

export default Recommendation