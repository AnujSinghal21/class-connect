// CourseP.js
import React, { useState } from 'react';
import './CourseP.css';

const CourseP = () => {
  const [searchValue, setSearchValue] = useState('Enter course name/course number here');
  const [courseDetails, setCourseDetails] = useState(null);
  const [userRating, setUserRating] = useState(null);

  const handleSearch = () => {
    // Assume a successful search and set some dummy course details
    const dummyCourseDetails = {
      courseName: 'Sample Course',
      professor: 'Dr. Smith',
      timetable: 'Mon and Wed, 10:00 AM - 12:00 PM',
      courseContents: ['Introduction', 'Module 1', 'Module 2', 'Final Project'],
      reviews: [],
    };

    setCourseDetails(dummyCourseDetails);
  };

  const handleRatingSubmit = () => {
    // Handle the submission of course rating
    console.log('User rated the course:', userRating);
  };

  return (
    <div className="course-page">
      <div className="search-bar">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {courseDetails ? (
        <div className="course-details">
          <div className="course-info oval-box">
            <h2>{courseDetails.courseName}</h2>
            <p>Professor: {courseDetails.professor}</p>
            <p>Timetable: {courseDetails.timetable}</p>
          </div>

          <div className="course-contents oval-box">
            <h3>Course Contents</h3>
            <ul>
              {courseDetails.courseContents.map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </ul>
          </div>

          <div className="course-reviews oval-box">
            <h3>Course Reviews</h3>
            <div className="rating-box">
              <p>Your Rating:</p>
              <input type="number" min="1" max="5" onChange={(e) => setUserRating(e.target.value)} />
            </div>
            <button onClick={handleRatingSubmit} className="submit-button">
              Submit
            </button>
            {/* Additional code for displaying reviews can be added here */}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CourseP;
