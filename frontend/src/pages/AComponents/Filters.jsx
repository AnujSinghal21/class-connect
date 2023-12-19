/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { InputGroup, InputGroupText, Input } from "reactstrap"
function Filters(props) {
  const { filters, setFilters, myCourses } = props
  const [ render, setRender ] = useState(false)
  useEffect(() => {
    setFilters({
      searchPrompt: "",
      creditsMin : "0",
      creditsMax : "14",
      avoidClash : myCourses.map(c => {return {code : c.code, avoid: true}}),
      avoidLabs : false,
      timeSlots : [
        {time: "anytime", allow: true},
        {time: "8-10", allow: true},
        {time: "10-14", allow: true},
        {time: "14-17", allow: true},
        {time: "17-20", allow: true}
      ]
    })
    setRender(true)
  }, [setFilters, myCourses])
  if (!render){
    return <></>
  }
  return (
    <div>
      <div className="p-2">
      <InputGroup size="sm">
        <InputGroupText>
          Search
        </InputGroupText>
        <Input 
        placeholder="course / dept / profs" 
        value={filters.searchPrompt} 
        onChange={e => setFilters({...filters, searchPrompt: e.target.value}) }
        />
        <InputGroupText>
          Credits
        </InputGroupText>
        <InputGroupText>
          Min
        </InputGroupText>
        <Input 
        className="flex-grow-0"
        style={{width: 60}}
        type="number" 
        value={filters.creditsMin} 
        onChange={e => setFilters({...filters, creditsMin: e.target.value}) }
        />
        <InputGroupText>
          Max
        </InputGroupText>
        <Input 
        className="flex-grow-0"
        style={{width: 60}}
        type="number" 
        value={filters.creditsMax} 
        onChange={e => setFilters({...filters, creditsMax: e.target.value}) }
        />
      </InputGroup>
      <InputGroup size="sm">
        <InputGroupText className="flex-grow-1">
          Avoid Clashes with: 
        </InputGroupText>
        {filters.avoidClash.map((c, i) => {
          return (
            <InputGroupText key={i}>
              <Input
                addon
                aria-label="Checkbox for following text input"
                type="checkbox"
                checked={c.avoid}
                onChange={() => setFilters(
                  {...filters, avoidClash: filters.avoidClash.map((x) => x.code === c.code ? {code: c.code, avoid: !c.avoid} : x)}
                  )}
              />
              <span>&nbsp;{c.code}</span> 
            </InputGroupText>
          )
        })}
      </InputGroup>
      <InputGroup size="sm">
        <InputGroupText>
          <span> Avoid Labs &nbsp; </span> 
          <Input
            addon
            aria-label="Checkbox for following text input"
            type="checkbox"
            checked={filters.avoidLabs}
            onChange={() => setFilters(
              {...filters, avoidLabs: !filters.avoidLabs}
              )}
          />
        </InputGroupText>
        <InputGroupText className="flex-grow-1"> Allowed Time slots </InputGroupText>
          {filters.timeSlots.map((c, i) => {
            return (
              <InputGroupText key={i}>
                <span>{c.time}&nbsp;</span> 
                <Input
                  addon
                  aria-label="Checkbox for following text input"
                  type="checkbox"
                  checked={c.allow}
                  disabled={(c.time !== "anytime" && filters.timeSlots[0].allow)}
                  onChange={() => setFilters(
                    {...filters, timeSlots: filters.timeSlots.map((x) => x.time === c.time ? {time: c.time, allow: !c.allow} : x)}
                    )}
                />
              </InputGroupText>
            )
          })}

      </InputGroup>
      </div>
    </div>
  )
}

export default Filters