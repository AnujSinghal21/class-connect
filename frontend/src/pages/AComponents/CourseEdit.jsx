/* eslint-disable react/prop-types */
import { Spinner } from 'reactstrap';

function CourseEdit(props) {
  return (
    <div className="fs-2 mt-5 text-center">
      {props.message} <Spinner color={props.color ? props.color : "primary"}> Loading Content ... </Spinner>
    </div>
  )
}

export default CourseEdit