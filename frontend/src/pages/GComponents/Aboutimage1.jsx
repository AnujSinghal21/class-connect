// About.js
import React from 'react';
import './Aboutimage1.css'; // Make sure to have a CSS file for styling

const Aboutimage1 = () => {
  return (
    <div className="about-container">
      <header>
        <h1>About</h1>
      </header>
      <section>
        <h2>Welcome to Class-Connect</h2>
        <p>
          During pre-registration, many students feel difficulties while choosing a department and open electives for their upcoming semester.
          It is a humongous task to find a course of your liking that doesn’t clash with your timetable from the huge DOAA course schedule.
          Also, while choosing courses, grading of the corresponding professors is also an important factor, for which we search many sites and seek reviews from many seniors.
          To overcome all these problems, here is a single platform, which will answer all your queries and find suitable courses for you in just a few minutes.
        </p>
        <p>
          <strong>CLASS-CONNECT</strong> is designed to simplify the course selection process and provide valuable information about courses and professors.
          We aim to make pre-registration a seamless experience for students.
        </p>
      </section>
    </div>
  );
};

export default Aboutimage1;
