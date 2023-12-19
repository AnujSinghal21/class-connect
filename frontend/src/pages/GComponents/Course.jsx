// CoursePage.js
import React, { useState } from 'react';
import './Course.css';

const Course = () => {
  const [courseName, setCourseName] = useState('');
  const [courseDetails, setCourseDetails] = useState(null);
  const [courseRating, setCourseRating] = useState('');
  const [isCourseRated, setIsCourseRated] = useState(false);

  const handleSearch = () => {
    // For simplicity, let's mock course details based on the search term
    // You might want to fetch actual data from an API
    const mockCourseDetails = {
      name: 'Introduction to React',
      credits: '3',
      department: 'Computer Science',
      professor: 'Dr. Smith',
      averageRating: 4.5, // Assume the average rating is 4.5 out of 5
      contents: 'This course covers the basics of React development.',
    };

    setCourseDetails(mockCourseDetails);
  };

  const handleRateCourse = () => {
    // You can handle the rating logic here
    // For now, let's just set a flag to indicate that the course is rated
    setIsCourseRated(true);
  };

  return (
    <div className="course-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter Course name/number"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {courseDetails ? (
        <div className="course-details-container">
          <h2>Course Details</h2>
          <div className="details-box">
            <div className="detail-row">
              <strong>Name:</strong> {courseDetails.name}
            </div>
            <div className="detail-row">
              <strong>Credits:</strong> {courseDetails.credits}
            </div>
            <div className="detail-row">
              <strong>Department:</strong> {courseDetails.department}
            </div>
            <div className="detail-row">
              <strong>Professor:</strong> {courseDetails.professor}
            </div>
            <div className="detail-row">
              <strong>Average Rating:</strong>
              {Array.from({ length: 5 }, (_, index) => (
                <span key={index} className={index < courseDetails.averageRating ? 'star-filled' : 'star-empty'}>
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="contents-box">
            <h2>Course Contents</h2>
            <p>{courseDetails.contents}</p>
          </div>

          <div className="rate-course-box">
            {isCourseRated ? (
              <p>Thank you for rating the course!</p>
            ) : (
              <>
                <input
                  type="number"
                  placeholder="Rate the course (out of 5)"
                  value={courseRating}
                  onChange={(e) => setCourseRating(e.target.value)}
                />
                <button onClick={handleRateCourse}>Submit Rating</button>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="no-course-details-box">No Course Details to Display</div>
      )}
    </div>
  );
};

export default Course;
