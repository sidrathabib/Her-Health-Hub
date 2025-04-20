import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="banner-container">
        <img src="teamwork.jpg" alt="teamwork" />
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
                <p>
                  <strong>Major and Minor:</strong> Sociology and Computer
                  Science
                </p>
                <p>
                  <strong>Contributions:</strong> meow
                </p>
                <p>
                  <strong>A note from Sidrat:</strong> With my knowledge in tech
                  and my desire to break into the Healthcare industry, this
                  capstone project felt like the perfect opportunity to combine
                  my two interests with the help of my teammates.
                </p>
                <div className="links">
                  <a href="#">
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src="pics/logoLN.png"
                      alt="LinkedIn"
                    />{" "}
                    Add Sidrat on LinkedIn
                  </a>
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
                <p>
                  <strong>Major and Minor:</strong> Sociology and Computer
                  Science
                </p>
                <p>
                  <strong>Contributions:</strong> meow
                </p>
                <p>
                  <strong>A note from Angie:</strong> My long health issues and
                  the lack of resources inspired me to create a page that can
                  help other women.
                </p>
                <div className="links">
                  <a href="#">
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src="pics/logoLN.png"
                      alt="LinkedIn"
                    />{" "}
                    Add Angie on LinkedIn
                  </a>
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
                <p>
                  <strong>Major and Minor:</strong> Sociology and Computer
                  Science
                </p>
                <p>
                  <strong>Contributions:</strong> meow
                </p>
                <p>
                  <strong>A note from Shana:</strong> My personal reproductive
                  issues inspired me to be involved in this project.
                </p>
                <div className="links">
                  <a href="#">
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src="pics/logoLN.png"
                      alt="LinkedIn"
                    />{" "}
                    Add Shana on LinkedIn
                  </a>
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
