

import React from 'react';
import './About.css'; // Make sure to create an AboutPage.css file for styling
// import ccimg from './class-connect.jpg'
const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <div className="content-box">
        <p>
        Welcome to "Class-Connect", where we simplify your work during the pre-registration 
        for students. The complexities of choosing departmental and open electives,
        and assessing professor reviews can be overwhelming. That's why we're here to simplify and 
        streamline the entire process.</p>
         <p>
At Class-Connect, our goal is to provide students with a single, user-friendly platform 
that effortlessly addresses all pre-registration concerns. No more sifting through extensive
 course schedules or scouring multiple sources for reviews of courses or professors. We've designed a solution 
 that ensures you find suitable courses in just a few minutes, tailored to your preferences and course template.
With Class-Connect, choosing the courses of your likings becomes a seamless experience.
Join us in simplifying the way you choose your courses. </p>
< h1 className="slogan">Class-Connect: We Choose for You </h1>
{/* <img className="about-image" src= {ccimg}  /> */}
     </div>
     </div>
  );
}

export default About;
