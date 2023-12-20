/* eslint-disable react/prop-types */
import { Spinner } from 'reactstrap';
//import ProfessorPage from './GComponents/ProfessorPage'
function ProfPage(props) {
  return (
    <div className="fs-2 mt-5 text-center">
      {props.message} <Spinner color={props.color ? props.color : "primary"}> Loading Content ... </Spinner>
    </div>
    //<ProfessorPage/>
  )
}

export default ProfPage