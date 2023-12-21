
import React, { useEffect,useState } from 'react';
import './Course.css';
import axios from "axios"
const CourseDetails = () => {
  const [courseName, setCourseName] = useState('');
  const [courseDetails, setCourseDetails] = useState(null);
  const [gradingDetails, setGradingDetails] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleStarClick = (clickedStar) => {
    setRating(clickedStar);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleSearch = () => {
    const mockCourseDetails = {
      name: 'Algorithms - Design and Analysis(CS345)',
      credits: '9',
      department: 'Computer Science and Engineering',
      professor: 'Professor Surender Baswana',
      averageRating: 5,
      contents: 'COURSE CONTENT .....',
    };

    setCourseDetails(mockCourseDetails);
    setGradingDetails('Grading Details Content ...');
  };

  return (
    <div className="course-page">
      {/* <div className="search-bar">
        <input
          type="text"
          placeholder="Enter Course name/Course number"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div> */}

      {courseDetails ? (
        <div className="course-details-container">
          <div className="course-details-box">
            <h2 className="course-details-heading">Course Details</h2>
            <div className="detail-row">
              <div>
                <strong>{courseDetails.name}</strong>
              </div>
            </div>
            <div className="detail-row">
              <div>
                <strong>Credits:</strong> {courseDetails.credits}
              </div>
            </div>
            <div className="detail-row">
              <strong>Department:</strong> {courseDetails.department}
            </div>
            <div className="detail-row">
              <strong>Professor(s):</strong> {courseDetails.professor}
            </div>

            <div className="rating-container">
              <strong>Average Rating:</strong>
              <span className="bold"> {courseDetails.averageRating}/5</span>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((index) => (
                  <span
                    key={index}
                    className={`star ${index <= courseDetails.averageRating ? 'filled' : ''}`}
                  >★</span>
                ))}
              </div>
            </div>
          </div>

          <div className="contents-box">
            <h2>Course Contents</h2>
            <p>{courseDetails.contents}</p>
          </div>

          <div className="grading-details-box">
            <h2>Grading Details</h2>
            <p>{gradingDetails}</p>
          </div>

          <div className={`rate-section ${submitted ? 'submitted' : ''}`}>
            {!submitted && <h2>Rate this course</h2>}
            {!submitted && (
              <div className="rating-input">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${rating >= star ? 'gold' : ''}`}
                    onClick={() => handleStarClick(star)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            )}
            {!submitted && (
              <button className="submit-rating" onClick={handleSubmit}>
                Submit
              </button>
            )}
            {submitted && (
              <div className="thank-you-box oval-box">
                <p>Thank you for rating this course</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="no-course-details-box">No Course Details to Display</div>
      )}
    </div>
  );
};

export default CourseDetails;
