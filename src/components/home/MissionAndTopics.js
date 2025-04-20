import React from 'react';
import "./MissionAndTopics.css"


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
              <p style={{ fontSize: '17.5px' }}>Welcome to Her Health Hub! This is a Capstone Project created by Hunter CSCI 233 students. Our goal is to spread information on reproductive issues and provide resources for women's health. We hope this platform helps others find knowledge and next steps.</p>
              <p style={{ fontSize: '17.5px' }}>We hope to have helped at least one woman or anyone out there! Information is valuable and we are here to share it.</p>
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
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card text-white p-3">
              <div className="card-body">
                <h3>Poly Cystic Ovary Syndrome</h3>
                <img src="./PCOS.jpg" alt="PCOS" className="img-fluid my-2 rounded" />
                <p>Polycystic Ovarian Syndrome causes the growth of ovarian cysts due to delayed ovulation. This can lead to...</p>
              </div>
              <button className="btn btn-light">Click to Read</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-white p-3">
              <div className="card-body">
                <h3>Endometriosis</h3>
                <img src="./endo.jpg" alt="Endometriosis" className="img-fluid my-2 rounded" />
                <p>Endometriosis is caused by enlarged ovaries with small cysts. This can lead to…</p>
              </div>
              <button className="btn btn-light">Click to Read</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-white p-3">
              <div className="card-body">
                <h3>Hypothyroidism</h3>
                <img src="./hypo.webp" alt="Research Topic" className="img-fluid my-2 rounded" />
                <p>Hypothyroidism causes the thyroid gland to under-produce hormones. This can lead to…</p>
              </div>
              <button className="btn btn-light">Click to Read</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-white p-3">
              <div className="card-body">
                <h3>Search For A Clinic</h3>
                <img src="./hypo.webp" alt="Research Topic" className="img-fluid my-2 rounded" />
                <p>Hypothyroidism causes the thyroid gland to under-produce hormones. This can lead to…</p>
              </div>
              <button className="btn btn-light">Click to Read</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-white p-3">
              <div className="card-body">
                <h3>About Us</h3>
                <img src="#" alt="Resources" className="img-fluid my-2 rounded" />
                <p>Want to learn more about the faces behind this website? Click here to get to know us.</p>
              </div>
              <button className="btn btn-light">Click to Read</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-white p-3">
              <div className="card-body">
                <h3>About Us</h3>
                <img src="#" alt="Resources" className="img-fluid my-2 rounded" />
                <p>Want to learn more about the faces behind this website? Click here to get to know us.</p>
              </div>
              <button className="btn btn-light">Click to Read</button>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default MissionAndTopics;