/* eslint-disable react/prop-types */
import { useState } from "react"
import CourseCard from "./CourseCard"
import { Input } from "reactstrap"
function applyFilters(filters, allCourses){
  const cmin = parseInt(filters.creditsMin)
  const cmax = parseInt(filters.creditsMax)
  const creditRangeFilter = (c)=>{
    return c.credits >= cmin && c.credits <= cmax
  }

  const avoidClashes = filters.avoidClash? filters.avoidClash.filter((c) => c.avoid === true): []
  
  const getNumberOfQuarters = (time) => {
    const startTime = new Date('1970-01-01T08:00:00');
    const endTime = new Date(`1970-01-01T${time}:00`);
    const millisecondsDifference = endTime - startTime;
    const quarters = Math.floor(millisecondsDifference / (15 * 60 * 1000));
    return quarters;
  }
  const hasClash = (c1, c2) => {
    const course2 = allCourses.find(c => c.code === c2.code)
    if (!course2) return true
    return c1.activities.reduce((clash, a1) => {
      return clash || course2.activities.reduce((clash2, a2) => {
        let clash3 = false
        if (a1.day === a2.day){
          const t1s = getNumberOfQuarters(a1.start)
          const t2s = getNumberOfQuarters(a2.start)
          const t1e = getNumberOfQuarters(a1.end)
          const t2e = getNumberOfQuarters(a2.end)
          if ((t1s >= t2s && t1s < t2e) || (t2s >= t1s && t2s < t1e)){
            clash3 = true
          }
        }
        return clash2 || clash3
      }, false)
    }, false)
  }
  const clashFilter = (c) => {
    return avoidClashes.reduce((ret, c2) => ret && (!hasClash(c, c2)), true)
  }

  const avoidLabs = filters.avoidLabs
  const avoidLabFilter = (c) => {
    if (!avoidLabs) return true
    return c.activities.reduce((labs, a) => labs && !(a.activity === 'P'), true)
  }

  const timeSlots = filters.timeSlots
  const overlapsTime = (start, end, c) => {
    return c.activities.reduce((out, a) => {
      const s = getNumberOfQuarters(a.start)
      const e = getNumberOfQuarters(a.end)
      return out || ((s >= start && s < end) || (e > start && e <= end))
    }, false)
  }
  const avoidTimeFilter = (c) => {
    if (!timeSlots || timeSlots[0].allow) return true
    if (!timeSlots[1].allow && overlapsTime(getNumberOfQuarters("08:00"), getNumberOfQuarters("10:00"), c)) return false
    if (!timeSlots[2].allow && overlapsTime(getNumberOfQuarters("10:00"), getNumberOfQuarters("14:00"), c)) return false
    if (!timeSlots[3].allow && overlapsTime(getNumberOfQuarters("14:00"), getNumberOfQuarters("17:00"), c)) return false
    if (!timeSlots[4].allow && overlapsTime(getNumberOfQuarters("17:00"), getNumberOfQuarters("20:00"), c)) return false
    return true
  }
  const filteredCourses = allCourses.filter((c) => creditRangeFilter(c) && clashFilter(c) && avoidLabFilter(c) && avoidTimeFilter(c))  
  return filteredCourses
}
function orderByPriority(filters, courses){
  const query = filters.searchPrompt? filters.searchPrompt: ""
  const tokenizer = (text) => {
    return text.toLowerCase().split(/\s+/).filter(t => t !== '')
  }
  const countOfWords = (tokens1, tokens2) => {
    return tokens2.reduce((count, t2) => (count += tokens1.filter(t1 => t1? t1.includes(t2): false).length * t2.length), 0);
  }
  const getRelevance = (item) => {
    const TokenizedPrompt = tokenizer(query)
    const SCode = (countOfWords(tokenizer(item.code), TokenizedPrompt)) * 50
    const SName = (countOfWords(tokenizer(item.name), TokenizedPrompt)) * 8
    const SProf1 = (countOfWords(tokenizer(item.prof1.name), TokenizedPrompt)) * 15
    const SProf2 = (countOfWords(tokenizer(item.prof2.name), TokenizedPrompt)) * 15
    const SRating = (item.ratings ** 0.5)

    const score = (SCode + SName + SProf1 + SProf2) * SRating
    return score
  }
  const scoreArray = courses.map((item) => { return {score: getRelevance(item), value: item}})
  scoreArray.sort((a, b) => b.score - a.score)
  return scoreArray.map((item) => item.value)
}

function Recommendation(props) {
  const {filters, allCourses, myCourses, setMyCourses } = props
  const [ showAll, setShowAll ] = useState(false) 
  const viewableCourses = orderByPriority(filters, applyFilters(filters, allCourses))
  const viewCourses = showAll? viewableCourses: (viewableCourses.length <= 10? viewableCourses: viewableCourses.slice(0, 10))
  return (
    <div style={{maxHeight: "100vh", maxWidth: 300}}>
      <p className='fw-bold mt-2 mb-0'>{viewableCourses.length} courses found. 
        &nbsp;&nbsp;&nbsp; Show all &nbsp;
        <Input type="checkbox" checked={showAll} onChange={() => setShowAll(!showAll)} />
      </p><hr />
      <div className="overflow-auto d-flex flex-column overflow-auto" style={{maxHeight: "90vh"}}>
        {viewCourses.map((c, i) => {
          return (
            <CourseCard course={c} key={i} myCourses={myCourses} setMyCourses={setMyCourses} />
          )
        })}
      </div>
    </div>
  )
}

export default Recommendation