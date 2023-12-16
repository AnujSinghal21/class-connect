// import React, { useState } from 'react';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption,
// } from 'reactstrap';
// //import Aboutpage1 from './Aboutpage1'
// //import Aboutpage1image from './Aboutpage1image.jpg'
// const items = [
//   {
//     src: 'https://picsum.photos/id/456/1200/400',
//     // altText: 'Slide1' ,
//     // caption: 'Slide 1',
//     key: 1,
//   },
//   {
//     src: 'https://picsum.photos/id/456/1200/400',
//     altText: 'Slide 2',
//     caption: 'Slide 2',
//     key: 2,
//   },
//   {
//     src: 'https://picsum.photos/id/678/1200/400',
//     altText: 'Slide 3',
//     caption: 'Slide 3',
//     key: 3,
//   },
// ];

// function Example(args) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   };

//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   };

//   const goToIndex = (newIndex) => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   };

//   const slides = items.map((item) => {
//     return (
//       <CarouselItem
//         onExiting={() => setAnimating(true)}
//         onExited={() => setAnimating(false)}
//         key={item.src}
//       >
//         <img src={item.src} alt={item.altText} />
//         <CarouselCaption
//           captionText={item.caption}
//           captionHeader={item.caption}
//         />
//       </CarouselItem>
//     );
//   });

//   return (
//     <Carousel
//       activeIndex={activeIndex}
//       next={next}
//       previous={previous}
//       {...args}
//     >
//       <CarouselIndicators
//         items={items}
//         activeIndex={activeIndex}
//         onClickHandler={goToIndex}
//       />
//       {slides}
//       <CarouselControl
//         direction="prev"
//         directionText="Previous"
//         onClickHandler={previous}
//       />
//       <CarouselControl
//         direction="next"
//         directionText="Next"
//         onClickHandler={next}
//       />
//     </Carousel>
//   );
// }

// export default Example;
// AboutPage.js

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
