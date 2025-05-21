import React from 'react';
import './MissionAndTopics.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";

const MissionAndTopics = () => {
  return (
    <>
      <div className="headings">
        <h1>Welcome to Her Health Hub</h1>
      </div>

      <div className="row-white-bg">
        <section className="container py-5">
          <div className="row align-items-center mb-4">
            <div className="col-md-6">
              <h2>Our Mission</h2>
              <p style={{ fontSize: '17.5px' }}>Her Health Hub is a wonderful platform where individuals are educated, empowered, and supported on their reproductive health journey. The website was created as a Capstone Project carried out by students of the CSCI 233 course at Hunter College. The prototype was developed due to a shared commitment to address the existing gaps in access to reliable, compassionate, and inclusive health information.
              </p>
              <p style={{ fontSize: '17.5px' }}> We hope Her Health Hub is a springboard for conversation and a community of care. If this platform has been able to clarify, comfort, or guide even one person, we will call it an achievement. Every individual deserves access to information that helps them take the next step to healing and prevention-and we are here to assist in making that happen.
              </p>
              <p style={{ fontSize: '17.5px' }}>Our mission is to provide intelligible and accessible resources relevant to conditions such as Polycystic Ovary Syndrome (PCOS), Endometriosis, and Hypothyroidism, an issue that is commonly underdiagnosed, dismissed, or misunderstood. Our philosophy has always been knowledge is power, and we therefore seek to empower women and individuals affected by these conditions to understand their bodies and speak up for their health.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img src="./helpingHands.jpg" alt="Helping Hands" className="img-fluid rounded" />
            </div>
          </div>
        </section>
      </div>

      <div className="headings">
        <h1>Select A Topic To Get Started</h1>
      </div>

      <div className="row-white-bg">
        <div className="container">
          <div className="topic-card-grid">
            <div className="card">
              <div className="card-body">
                <h3>Poly Cystic Ovary Syndrome</h3>
                <img src="./pcos.jpg" alt="PCOS" className="img-fluid my-2 rounded" />
                <p>Polycystic Ovarian Syndrome causes the growth of ovarian cysts due to delayed ovulation. This can lead to...</p>
              </div>
              {/* <button className="btn btn-light">Click to Read</button> */}
              <Link to="/PCOS" className="btn btn-light">Explore PCOS</Link>
            </div>

            <div className="card">
              <div className="card-body">
                <h3>Endometriosis</h3>
                <br></br>
                <img src="./endo.jpg" alt="Endometriosis" className="img-fluid my-2 rounded" />
                <p>Endometriosis is caused by enlarged ovaries with small cysts. This can lead to…</p>
              </div>
              {/* <button className="btn btn-light">Click to Read</button> */}
              <Link to="/Endo" className="btn btn-light">Explore Endometriosis</Link>
            </div>

            <div className="card">
              <div className="card-body">
                <h3>Hypothyroidism</h3>
                <br></br>
                <img src="./hypo.webp" alt="Hypothyroidism" className="img-fluid my-2 rounded" />
                <p>Hypothyroidism causes the thyroid gland to under-produce hormones. This can lead to…</p>
              </div>
              {/* <button className="btn btn-light">Click to Read</button> */}
              <Link to="/Hypo" className="btn btn-light">Explore Hypothyroidism</Link>             
            </div>


            <div className="card">
              <div className="card-body">
                <h3>About Us</h3>
                <br></br>
                <img src="./abtus.jpg" alt="About Us" className="img-fluid my-2 rounded" />
                <p>Want to learn more about the faces behind this website? Click here to get to know us.</p>
              </div>
              {/* <button className="btn btn-light">Click to Read</button> */}
              <Link to="/AboutUs" className="btn btn-light">Meet Us</Link>

            </div>


            <div className="card">
              <div className="card-body">
                <h3>More Topics To Come</h3>
                <br></br>
                <img src="./ideas.jpg" alt="Exercise" className="img-fluid my-2 rounded" />
                <p>Have more topics to suggest? Scroll down to the Contact Us box!</p>
              </div>
                  {/* <button className="btn btn-light">Click to Read</button> */}
                  <Link to="/Endo" className="btn btn-light">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionAndTopics;

// import React from 'react';
// import "./MissionAndTopics.css"


// const MissionAndTopics = () => {
//   return (
//     <>
//       <div className="headings">
//         <h1>Welcome to Her Health Hub</h1>
//       </div>

//       <div className="row-white-bg">
//         <section className="container py-5">
//           <div className="row align-items-center mb-4">
//             <div className="col-md-6">
//               <h2>Our Mission</h2>
//               <p style={{ fontSize: '17.5px' }}>Welcome to Her Health Hub! This is a Capstone Project created by Hunter CSCI 233 students. Our goal is to spread information on reproductive issues and provide resources for women's health. We hope this platform helps others find knowledge and next steps.</p>
//               <p style={{ fontSize: '17.5px' }}>We hope to have helped at least one woman or anyone out there! Information is valuable and we are here to share it.</p>
//             </div>
//             <div className="col-md-6 text-center">
//               <img src="./helpingHands.jpg" alt="Helping Hands" className="img-fluid rounded" />
//             </div>
//           </div>
//         </section>
//       </div>

//       <div className="headings">
//         <h1>Select A Topic To Get Started</h1>
//       </div>

//       <div className="row-white-bg">
//         <div className="row g-4">
//           <div className="col-md-4">
//             <div className="card text-white p-3">
//               <div className="card-body">
//                 <h3>Poly Cystic Ovary Syndrome</h3>
//                 <img src="./PCOS.jpg" alt="PCOS" className="img-fluid my-2 rounded" />
//                 <p>Polycystic Ovarian Syndrome causes the growth of ovarian cysts due to delayed ovulation. This can lead to...</p>
//               </div>
//               <button className="btn btn-light">Click to Read</button>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card text-white p-3">
//               <div className="card-body">
//                 <h3>Endometriosis</h3>
//                 <img src="./endo.jpg" alt="Endometriosis" className="img-fluid my-2 rounded" />
//                 <p>Endometriosis is caused by enlarged ovaries with small cysts. This can lead to…</p>
//               </div>
//               <button className="btn btn-light">Click to Read</button>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card text-white p-3">
//               <div className="card-body">
//                 <h3>Hypothyroidism</h3>
//                 <img src="./hypo.webp" alt="Research Topic" className="img-fluid my-2 rounded" />
//                 <p>Hypothyroidism causes the thyroid gland to under-produce hormones. This can lead to…</p>
//               </div>
//               <button className="btn btn-light">Click to Read</button>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card text-white p-3">
//               <div className="card-body">
//                 <h3>Search For A Clinic</h3>
//                 <img src="./hypo.webp" alt="Research Topic" className="img-fluid my-2 rounded" />
//                 <p>Hypothyroidism causes the thyroid gland to under-produce hormones. This can lead to…</p>
//               </div>
//               <button className="btn btn-light">Click to Read</button>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card text-white p-3">
//               <div className="card-body">
//                 <h3>About Us</h3>
//                 <img src="./abtus.jpg" alt="Resources" className="img-fluid my-2 rounded" />
//                 <p>Want to learn more about the faces behind this website? Click here to get to know us.</p>
//               </div>
//               <button className="btn btn-light">Click to Read</button>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="card text-white p-3">
//               <div className="card-body">
//                 <h3>About Us</h3>
//                 <img src="./searchClinic.webp" alt="Resources" className="img-fluid my-2 rounded" />
//                 <p>Want to learn more about the faces behind this website? Click here to get to know us.</p>
//               </div>
//               <button className="btn btn-light">Click to Read</button>
//             </div>
//           </div>


//         </div>
//       </div>
//     </>
//   );
// };

// export default MissionAndTopics;