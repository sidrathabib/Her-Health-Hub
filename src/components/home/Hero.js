// ✅ Reusable HeroBanner Component
// File: src/components/common/HeroBanner.js
import React from 'react';
import "./Hero.css"

const Hero = () => {
  return (
    <div className="banner-container">
      <img src="../womensHealth.webp" alt="womenshealth" className="banner-image" />
    </div>
  );
};

export default Hero;








// import React from 'react';
// import "./Hero.css"

// const Hero = () => {
//   return (
//     <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
//       <div className="carousel-inner" role="listbox">
//         <div className="carousel-item active">
//           <img src="./womensHealth.webp" className="w-100 d-block" alt="First slide" />
//         </div>
//         <div className="carousel-item">
//           <img src="./scrubsBanner.jpg" className="w-100 d-block" alt="Second slide" />
//         </div>
//         <div className="carousel-item">
//           <img src="pics/women.webp" className="w-100 d-block" alt="Third slide" />
//         </div>
//       </div>
//       <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default Hero;