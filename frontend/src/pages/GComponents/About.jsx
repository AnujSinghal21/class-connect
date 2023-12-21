import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleStarClick = (clickedStar) => {
    setRating(clickedStar);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="about-container">
      <div className="about-heading">
        <h1><strong>About Us</strong></h1>
        <hr />
      </div>

      <div className="about-content box-oval">
        <p className="larger-font">
          During the pre-registration, students often grapple with the intricate task of selecting department
          and open electives. The vast DOAA course schedule poses a challenge, making it daunting to find courses
          that align with personal preferences and seamlessly fit into academic templates. Also respective professors
          and their grading also matters a lot. </p>
          <p className="larger-font">So we bring you "<strong>Class Connect</strong>",
          a platform designed to address these challenges and simplify the course selection process.
          With "<strong>Class Connect</strong>", finding the perfect courses becomes effortless. We provide quick answers to
          your queries and personalized recommendations, streamlining the entire process in just a few minutes.
          Bid farewell to the tedious task of navigating schedules and seeking reviews on different platforms.
          "<strong>Class Connect</strong>" is your all-in-one solution for efficient and informed course selection.
        </p>
      </div>

      <div className="developers-section box-oval">
        <h2 className="developers-heading">Developers</h2>
        <div className="developer-names">
          <div className="developer">
            <p  className='larger-font'>Anuj</p>
            <p className="smaller-font">anuj21@iitk.ac.in</p>
          </div>
          <div className="developer">
            <p className='larger-font'>A. Atulya Sundaram</p>
            <p className="smaller-font">atulya21@iitk.ac.in</p>
          </div>
          <div className="developer">
            <p className='larger-font'>Chinmay Amrutkar</p>
            <p className="smaller-font">chinmay21@iitk.ac.in</p>
          </div>
          <div className="developer">
            <p className='larger-font'>Goutam Das</p>
            <p className="smaller-font">goutamd21@iitk.ac.in</p>
          </div>
        </div>
      </div>

      <div className={`rate-section ${submitted ? 'submitted' : ''}`}>
        {!submitted && <h2>Rate Our Platform</h2>}
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
           <div className="thank-you-box">
            <p>Thank you for rating our platform</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
