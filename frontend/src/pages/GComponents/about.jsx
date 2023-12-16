// // About.js
// import React from 'react';
// import './About.css';

// const About = () => {
//   return (
//     <div className="about-container">
//       <div className="about-content">
//         <h2>Welcome to Our Registration Platform</h2>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
//           nunc id ante tincidunt, vel efficitur libero volutpat. Curabitur
//           interdum metus eget facilisis fringilla.
//         </p>
//         <p>
//           Our platform is designed to make the course registration process
//           seamless for students. Explore the available courses, plan your
//           schedule, and make informed decisions for the upcoming semester.
//         </p>

//         <h2>Meet Our Team</h2>
//         <div className="team-members">
//           {/* Team member cards go here */}
//           <div className="team-member">
//             {/* <img src="john-doe.jpg" alt="John Doe" /> */}
//             <h4>John Doe</h4>
//             <p>Frontend Developer</p>
//           </div>
//           {/* Add more team members as needed */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from 'react';
import './About.css'
const About = () => {
  return (
    <div className="about-page-container">
      <h1>About Us</h1>
      <p>
        Welcome to [Your Company Name]! We believe in [Your Company's Mission or Values]. Founded on the principles of [Core Value 1], [Core Value 2], and [Core Value 3], we strive to [Brief Description of Company's Purpose].
      </p>

      {/* ... (rest of the content) ... */}
    </div>
  );
};

export default About;
