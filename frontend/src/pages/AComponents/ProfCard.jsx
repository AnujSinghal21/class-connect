/* eslint-disable react/prop-types */
import { Card, CardTitle, CardText, Button } from "reactstrap"

function ProfCard(props) {
  const prof = props.prof
  const rating = prof.ratingcount === 0? 2.5 : prof.ratingsum / prof.ratingcount
  const openProf = ()=>{
    window.open(`/profs?email=${prof.email}`, '_self')
  }
  return (
    <div className="m-1">
      <Card
        body
      >
        <CardTitle tag="h5">
          {prof.name}&nbsp; <span style={{fontSize : 12}}>{"⭐".repeat(Math.ceil(rating))}{rating.toFixed(1)}</span>
        </CardTitle>
        <CardText>
          {prof.email}
        </CardText>
        <Button color="primary" onClick={openProf}>
            View
        </Button>
      </Card>
    </div>
  )
}

export default ProfCard