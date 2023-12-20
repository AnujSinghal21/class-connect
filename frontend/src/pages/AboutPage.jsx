/* eslint-disable react/prop-types */
// import { Spinner } from 'reactstrap';
import About from './GComponents/About'
// import About from "./GComponents/about"
function AboutPage(props) {
  return (
    <div className="fs-2 mt-5 text-center">
      {/* {props.message} <Spinner color={props.color ? props.color : "primary"}> Loading Content ... </Spinner> */}
      <About/>
    </div>
  )
}

export default AboutPage