// Import React and CSS file
import React from 'react';
import './Aboutpage1.css'; // Make sure to create an App.css file for styling

// React component
const Aboutpage1 = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">ABOUT</h1>
      <div className="content-box">
        <p>During pre-registration, many students feel difficulties while choosing department and open electives for their upcoming semester. It is a 
humongous task to find a course of your liking which doesn’t clash with 
your template from the huge DOAA course schedule. Also while choosing courses, grading of the corresponding professors are also an important 
factor, for which we search many sites and seek review from many seniors. To overcome all these problems, here is a single platform,
 which will answer all your queries and find suitable courses for you 
in just few minutes .....</p>
      </div>
      <h2 className="sub-heading">CLASS-CONNECT</h2>
    </div>
  );
}

// Export the component
export default Aboutpage1;
