import React from "react";
import "./AboutUs.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="">
      <div className="banner-container">
        <img src="flowerBanner.jpg" alt="teamwork" />
      </div>

      <div className="headings">
        <h1>Meet the Team</h1>
      </div>

      <section className="about">
        <div className="team">
          {/* Sidrat */}
          <div className="member">
            <div className="member-content">
              <img src="/sid.png" alt="Sid" />
              <div className="info">
                <h2>Sidrat Habib</h2>
                <p>
                  <b>Graduating Class of 2025</b>
                </p>
                <p>
                  <b>Major and Minor:</b> Sociology and Computer Science
                </p>
                <p>
                  <b>Contributions:</b> <p></p>Sidrat has able to help with the
                  functionuality of the website, as wellness as seeing up the
                  clincal database. She has attributed to the footer and header
                  of the website.
                </p>
                <p>
                  <b>A note from Sidrat:</b> With my knowledge in tech and my
                  desire to break into the Healthcare industry, this capstone
                  project felt like the perfect opportunity to combine my two
                  interests with the help of my teammates.
                </p>
                <div className="links">
                  <a
                    href="https://www.linkedin.com/in/sidrat-habib-a62a00202/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      backgroundColor: "#ffffff",
                      color: "#0e76a8",
                      padding: "8px 14px",
                      borderRadius: "20px",
                      fontWeight: "600",
                      textDecoration: "none",
                      marginTop: "10px",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#e6f0f8")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#ffffff")
                    }
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Angie */}
          <div className="member">
            <div className="member-content">
              <img src="/angie.jpeg" alt="Angie" />
              <div className="info">
                <h2>Angie Arevalo</h2>
                <p>
                  <b>Graduating Class of 2025</b>
                </p>
                <p>
                  <b>Major and Minor:</b> Psychology and Computer Science
                </p>
                <p>
                  <b>Contributions:</b> Angie has been able to help with the
                  research end of our website. She has probvided information
                  about PCOS and the steps to take after a diagnoses. She has
                  also been able to help with the asthetics of the website. As
                  well, as setting up evverything to align and look more formal
                  in the website.
                </p>
                <p>
                  <b>A note from Angie:</b> My long health issues and the lack
                  of resources inspired me to create a page that can help other
                  women.
                </p>
                <div className="links">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      backgroundColor: "#ffffff",
                      color: "#0e76a8",
                      padding: "8px 14px",
                      borderRadius: "20px",
                      fontWeight: "600",
                      textDecoration: "none",
                      marginTop: "10px",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#e6f0f8")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#ffffff")
                    }
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Shana */}
          <div className="member">
            <div className="member-content">
              <img src="/shana.JPEG" alt="Shana" />
              <div className="info">
                <h2>Shana Panicker</h2>
                <p>
                  <b>Graduating Class of 2025</b>
                </p>
                <p>
                  <b>Major and Minor:</b> Sociology and Computer Science
                </p>
                <p>
                  <b>Contributions:</b> Shana has been able to help with the
                  research end of our website. She has provided information
                  about the different health issues that women face. As well, as
                  the informing how to go about getting help once diagnosed.
                </p>
                <p>
                  <b>A note from Shana:</b> My personal reproductive issues
                  inspired me to be involved in this project.
                </p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="links">
                  <a
                    href="https://www.linkedin.com/in/shanapanicker/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      backgroundColor: "#ffffff",
                      color: "#0e76a8",
                      padding: "8px 14px",
                      borderRadius: "20px",
                      fontWeight: "600",
                      textDecoration: "none",
                      marginTop: "10px",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#e6f0f8")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#ffffff")
                    }
                  >
                    Connect on LinkedIn
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
