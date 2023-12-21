/* eslint-disable react/no-unescaped-entities */
import { Card, CardTitle, CardText } from 'reactstrap'
import RateComment from './RateComment';
const AboutContent = () => {
  const developers = [
    {name: "Anuj", email: "anuj21@iitk.ac.in"},
    {name: "Chinmay Amrutkar", email: "chinmayma21@iitk.ac.in"},
    {name: "Goutam Das", email: "goutamd21@iitk.ac.in"},
    {name: "A. Atulya Sundaram", email: "aatulya21@iitk.ac.in"}
  ]
  const ratingSubmission = (data) => {
    return data
  }
  return (
    <div className="container-fluid" style={{ maxHeight: "100vh", overflow: "auto" }}>
      <div className="fs-2 my-3 mt-4 text-center fw-bold">
        <h1>About Us</h1>
        <hr />
      </div>
      <div className='p-2'>
        <p>
          During the pre-registration, students often grapple with the intricate task of selecting department
          and open electives. The vast DOAA course schedule poses a challenge, making it daunting to find courses
          that align with personal preferences and seamlessly fit into academic templates. Also respective professors
          and their grading also matters a lot. 
        </p>
        <p>
          So we bring you <strong>"CLASS-CONNECT"</strong>,
          a platform designed to address these challenges and simplify the course selection process.
          With <strong>"CLASS-CONNECT"</strong>, finding the perfect courses becomes effortless. We provide quick answers to
          your queries and personalized recommendations, streamlining the entire process in just a few minutes.
          Bid farewell to the tedious task of navigating schedules and seeking reviews on different platforms.
          <strong>"CLASS-CONNECT"</strong> is your all-in-one solution for efficient and informed course selection.
        </p>
        <p>
          This project is an open-source initiative developed using the MERN stack. The project repository can be accessed&nbsp; 
          <a href='https://github.com/AnujSinghal21/class-connect'>here</a>. If you are interested in contributing, please clone the repository and submit your changes through 
          a pull request.        
        </p>
      </div>
      <div className="p-2">
        <h2 className="text-center">Developed by</h2>
        <div className="d-flex flex-wrap justify-content-evenly">
          {developers.map((d, i) => {
            return (
              <Card key={i} body style={{width: "40%"}} color='dark' inverse className='m-2'>
                <CardTitle tag="h5">
                  {d.name}
                </CardTitle>
                <CardText>
                  <a href={`mailto:${d.email}`} className='text-white'>{d.email}</a>
                </CardText>
              </Card>
            )
          })}
        </div>
      </div>
      <RateComment onSubmit={ratingSubmission} title="Give us your valuable feedback" />
    </div>
  );
};

export default AboutContent;
