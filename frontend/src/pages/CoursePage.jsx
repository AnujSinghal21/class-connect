import axios from "axios"
import { useEffect, useState } from "react"
import { Alert, InputGroup, Input, Button } from 'reactstrap'
import CourseDetails from "./GComponents/CourseDetails"
import CourseCard from "./GComponents/CourseCard"
import Waiting from "./AComponents/Waiting"

function CoursePage() {
  const [ loaded, setLoaded ] = useState(false)
  const [ courses, setCourses ] = useState([])
  const [ prompt, setPrompt ] = useState("")
  const [ showAll, setShowAll ] = useState(false)
  const params = new URLSearchParams(window.location.search)
  let code = params.get("code")
  // let title = params.get("title")
  const baseUrl = `/api/courses${code===null? "": `?code=${code}`}`

  useEffect(() => {
    axios
    .get(baseUrl)
    .then(response => {
      if (parseInt(response.status) === 200){
        const data = response.data
        console.log(data)
        setCourses(data)
        setLoaded(true)
      }else{
        alert("Could not load data")
      }
    }).catch((err) => {
      alert("Could not load data")
      console.log(err)
    })
  }, [baseUrl, code])

  if (!loaded){
    return (
      <Waiting message="Loading Content... Please wait or refresh"/>
    )
  }

  if (courses.length === 0){
    return (
      <Alert color="danger">
        Invalid URL, please go back &nbsp;
        <a
          className="alert-link"
          href="/courses"
          rel="noreferrer"
          target="_self"
        >here</a> &nbsp;to search for courses
      </Alert>
    )
  }

  if (courses.length === 1){
    return <CourseDetails course={courses[0]} />
  }
  
  const orderByPriority = (courses) => {
    const query = prompt
    const tokenizer = (text) => {
      return text.toLowerCase().split(/\s+/).filter(t => t !== '')
    }
    const countOfWords = (tokens1, tokens2) => {
      return tokens2.reduce((count, t2) => (count += tokens1.filter(t1 => t1? t1.includes(t2): false).length * t2.length), 0);
    }
    const getRelevance = (item) => {
      const TokenizedPrompt = tokenizer(query)
      const SCode = (countOfWords(tokenizer(item.code), TokenizedPrompt)) * 50
      const SName = (countOfWords(tokenizer(item.title), TokenizedPrompt)) * 8
      const SProf1 = (countOfWords(tokenizer(item.prof), TokenizedPrompt)) * 15
      const SProf2 = (countOfWords(tokenizer(item.oprof), TokenizedPrompt)) * 15
      const SRating = (item.ratings ** 0.5)
  
      const score = (SCode + SName + SProf1 + SProf2) * SRating
      return score
    }
    const scoreArray = courses.map((item) => { return {score: getRelevance(item), value: item}})
    scoreArray.sort((a, b) => b.score - a.score)
    return scoreArray.map((item) => item.value)
  }
  
  const viewcourses = orderByPriority(courses).slice(0, showAll? courses.length: Math.min(courses.length, 20))

  return(
    <div style={{maxHeight: "100vh", overflow: "auto"}}>
      <div className="my-2">
        <InputGroup style={{width: "50%", margin: "auto"}}>
          <Input type="text" placeholder="search here..." value={prompt} onChange={(e) => setPrompt(e.target.value)} />
          <Button onClick={() => setShowAll(!showAll)}>
            {showAll? "Show top 20": `Show All (${courses.length})`}
          </Button>
        </InputGroup>
      </div>
      <div className="d-flex flex-wrap justify-content-evenly align-items-stretch">
        {viewcourses.map((p, i) => {
          return (
            <div key={i} style={{width: "20%"}}>
              <CourseCard course={p}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CoursePage
