import React from "react";
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="banner-container">
        <img src="pics/teamwork.jpg" alt="teamwork" />
      </div>

      <h1>Meet the Team</h1>

      <section className="about">
        <div className="team">

          {/* Sidrat */}
          <div className="member">
            <div className="member-content">
              <img src="pics/car.jpg" alt="Sid" />
              <div className="info">
                <h2>Sidrat Habib</h2>
                <p>Graduating Class of 2025</p>
                <p><b>Major and Minor:</b> Sociology and Computer Science</p>
                <p><b>Contributions:</b> meow</p>
                <p><b>A note from Sidrat:</b> With my knowledge in tech and my desire to break into the Healthcare industry, this capstone project felt like the perfect opportunity to combine my two interests with the help of my teammates.</p>
                <div className="links">
                  {/* <a href="#">
                    <img src="pics/logoLN.png" alt="LinkedIn" style={{ width: '40px', height: '40px' }} /> Add Sidrat on LinkedIn
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* Angie */}
          <div className="member">
            <div className="member-content">
              <img src="pics/car.jpg" alt="Angie" />
              <div className="info">
                <h2>Angie Arevalo</h2>
                <p>Graduating Class of 2025</p>
                <p><b>Major and Minor:</b> Sociology and Computer Science</p>
                <p><b>Contributions:</b> meow</p>
                <p><b>A note from Angie:</b> My long health issues and the lack of resources inspired me to create a page that can help other women.</p>
                <div className="links">
                  {/* <a href="#">
                    <img src="pics/logoLN.png" alt="LinkedIn" style={{ width: '40px', height: '40px' }} /> Add Angie on LinkedIn
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* Shana */}
          <div className="member">
            <div className="member-content">
              <img src="pics/car.jpg" alt="Shana" />
              <div className="info">
                <h2>Shana Panicker</h2>
                <p>Graduating Class of 2025</p>
                <p><b>Major and Minor:</b> Sociology and Computer Science</p>
                <p><b>Contributions:</b> meow</p>
                <p><b>A note from Shana:</b> My personal reproductive issues inspired me to be involved in this project.</p>
                <div className="links">
                  {/* <a href="#">
                    <img src="pics/logoLN.png" alt="LinkedIn" style={{ width: '40px', height: '40px' }} /> Add Shana on LinkedIn
                  </a> */}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutUs;