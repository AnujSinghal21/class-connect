// // About.js
// import React from 'react';
// const About = () => {
//   return (
//     <div className="about-container">
//       <div className="about-content">
//         <h2>Welcome to Our Course Registration Platform</h2>
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
//             <img src="john-doe.jpg" alt="John Doe" />
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
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

import image1 from './Aboutimage1.jpg'
const items = [
  {
    src: image1,
    // altText: 'Slide 1',
    // caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/456/1200/400',
    // altText: 'Slide 2',
    // caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/678/1200/400',
    // altText: 'Slide 3',
    // caption: 'Slide 3',
    key: 3,
  },
];

function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Example;