// CoursePage.js
import React, { useState } from 'react';
import './CourseP.css';

const CourseP = () => {
  const [searchValue, setSearchValue] = useState('');
  const [courseDetails, setCourseDetails] = useState(null);
  const [userRating, setUserRating] = useState(null);
  const [userReview, setUserReview] = useState('');

  const handleSearch = () => {
    // Assume a successful search and set some dummy course details
    const dummyCourseDetails = {
      courseName: 'Sample Course',
      professor: 'Dr. Smith',
      timetable: 'Mon and Wed, 10:00 AM - 12:00 PM',
      courseContents: ['Introduction', 'Module 1', 'Module 2', 'Final Project'],
      reviews: [
        { rating: 5, review: 'Excellent course!' },
        { rating: 4, review: 'Very informative' },
      ],
    };

    setCourseDetails(dummyCourseDetails);
  };

  const handleInputChange = (e) => {
    // Update searchValue when the user types in the input box
    setSearchValue(e.target.value);
  };

  const handleInputClick = () => {
    // Clear the default text when the user clicks on the input box
    if (searchValue === 'Enter course name/course number here') {
      setSearchValue('');
    }
  };

  const handleRatingSubmit = () => {
    // Handle the submission of course rating
    console.log('User rated the course:', userRating);
  };

  const handleReviewSubmit = () => {
    // Handle the submission of user review
    console.log('User reviewed the course:', userReview);
  };

  const calculateAverageRating = () => {
    if (courseDetails && courseDetails.reviews.length > 0) {
      const totalRatings = courseDetails.reviews.reduce((sum, review) => sum + review.rating, 0);
      return Math.round(totalRatings / courseDetails.reviews.length);
    }
    return 0;
  };

  const renderRatingBar = () => {
    const averageRating = calculateAverageRating();
    const starPercentage = (averageRating / 5) * 100;

    return (
      <div className="rating-bar">
        <div className="stars-outer">
          <div className="stars-inner" style={{ width: `${starPercentage}%` }}></div>
        </div>
        <span className="average-rating">{averageRating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="course-page">
      <div className="search-bar">
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          onClick={handleInputClick}
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
            {renderRatingBar()}
            {courseDetails.reviews.map((review, index) => (
              <div key={index} className="user-review">
                <p>{review.review}</p>
                <p className="user-rating">User Rating: {review.rating}</p>
              </div>
            ))}
          </div>

          <div className="user-review-box oval-box">
            <h3>Write Your Course Review</h3>
            <textarea
              value={userReview}
              onChange={(e) => setUserReview(e.target.value)}
              placeholder="Write your review here..."
              className="review-textarea"
            ></textarea>
            <div className="rating-box">
              <p>Your Rating:</p>
              <input
                type="number"
                min="1"
                max="5"
                onChange={(e) => setUserRating(e.target.value)}
              />
            </div>
            <button onClick={handleReviewSubmit} className="submit-button">
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="no-courses oval-box">
          <p>No Courses to Display</p>
        </div>
      )}
    </div>
  );
};

export default CourseP;
