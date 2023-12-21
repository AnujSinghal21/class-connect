/* eslint-disable react/prop-types */

import axios from "axios"
import { useEffect, useState } from "react"
import { Alert, InputGroup, Input, Button } from 'reactstrap'
import Waiting from "./AComponents/Waiting"
import ProfDetails from "./AComponents/ProfDetails"
import ProfCard from "./AComponents/ProfCard"

//import ProfessorPage from './GComponents/ProfessorPage'
function ProfPage() {
  const [ loaded, setLoaded ] = useState(false)
  const [ profs, setProfs ] = useState([])
  const [ prompt, setPrompt ] = useState("")
  const [ showAll, setShowAll ] = useState(false)
  const params = new URLSearchParams(window.location.search)
  let email = params.get("email")
  const baseUrl = `/api/profs${email===null? "": `?email=${email}`}`

  useEffect(() => {
    axios
    .get(baseUrl)
    .then(response => {
      if (parseInt(response.status) === 200){
        const data = response.data
        console.log(data)
        setProfs(data)
        setLoaded(true)
      }else{
        alert("Could not load data")
      }
    }).catch((err) => {
      alert("Could not load data")
      console.log(err)
    })
  }, [baseUrl, email])

  if (!loaded){
    return (
      <Waiting message="Loading Content... Please wait or refresh"/>
    )
  }
  if (profs.length === 0){
    return (
      <Alert color="danger">
        Invalid URL, please go back &nbsp;
        <a
          className="alert-link"
          href="/profs"
          rel="noreferrer"
          target="_self"
        >here</a> &nbsp;to search for professors
      </Alert>
    )
  }
  if (profs.length === 1){
    return <ProfDetails prof={profs[0]} />
  }
  const orderByPriority = (profsArray) => {
    const query = prompt
    const tokenizer = (text) => {
      return text.toLowerCase().split(/\s+/).filter(t => t !== '')
    }
    const countOfWords = (tokens1, tokens2) => {
      return tokens2.reduce((count, t2) => (count += tokens1.filter(t1 => t1? t1.includes(t2): false).length * t2.length), 0);
    }
    const getRelevance = (item) => {
      const TokenizedPrompt = tokenizer(query)
      const SName = (countOfWords(tokenizer(item.name), TokenizedPrompt))
      const SEmail = (countOfWords(tokenizer(item.email), TokenizedPrompt)) * 2
  
      const score = SName + SEmail
      return score
    }
    const scoreArray = profsArray.map((item) => { return {score: getRelevance(item), value: item}})
    scoreArray.sort((a, b) => b.score - a.score)
    return scoreArray.map((item) => item.value)
  }
  
  const viewProfs = orderByPriority(profs).slice(0, showAll? profs.length: Math.min(profs.length, 20))

  return (
    <div style={{maxHeight: "100vh", overflow: "auto"}}>
      <div className="my-2">
        <InputGroup style={{width: "50%", margin: "auto"}}>
          <Input type="text" placeholder="search here..." value={prompt} onChange={(e) => setPrompt(e.target.value)} />
          <Button onClick={() => setShowAll(!showAll)}>
            {showAll? "Show top 20": `Show All (${profs.length})`}
          </Button>
        </InputGroup>
      </div>
      <div className="d-flex flex-wrap justify-content-evenly align-items-stretch">
        {viewProfs.map((p, i) => {
          return (
            <div key={i} style={{width: "20%"}}>
              <ProfCard prof={p}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProfPage