// Import necessary React components and hooks
import React, { useState } from 'react';

// Sample data for courses
const coursesData = [
  {
    id: 1,
    title: 'React Basics',
    content: 'Introduction to React and its fundamentals.',
  },
  {
    id: 2,
    title: 'Node.js for Beginners',
    content: 'Learn the basics of Node.js and server-side JavaScript.',
  },
  // Add more courses as needed
];

// Course component to display course details
const Course = ({ course }) => (
  <div>
    <h2>{course.title}</h2>
    <p>{course.content}</p>
  </div>
);

// Main component for the course page
const CourseP = () => {
  // State to manage the search query and matched courses
  const [searchQuery, setSearchQuery] = useState('');
  const [matchedCourses, setMatchedCourses] = useState([]);

  // Function to handle search input changes
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  // Function to handle search button click
  const handleSearchClick = () => {
    // Filter courses based on the search query
    const matched = coursesData.filter(
      (course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setMatchedCourses(matched);
  };

  return (
    <div>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search for a course..."
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {/* Search button */}
      <button onClick={handleSearchClick}>Search</button>

      {/* Display matched courses */}
      {matchedCourses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseP;
