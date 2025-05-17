import React from 'react';
import './Footer.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <div className="container mt-5">

        <div className="row">
          <div className="col-md-6">
            <div className="contact-form">
              <h3>Contact Us</h3>
              <p>Feel free to reach out to us with any inquiries!</p>
              <form>
                <div className="mb-3">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" placeholder="Enter your first name" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" placeholder="Enter your last name" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Enter your email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="Subject of your message" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>

          <div className="col-md-6">
            
            <h4 className="footer-pages-title">Pages</h4>

            <ul className="footer-links">
              {/* <li style={{ listStyle: 'none' }}><a href="#">Poly Cystic Ovary Syndrome</a></li>
              <li style={{ listStyle: 'none' }}><a href="#">Endometriosis</a></li>
              <li style={{ listStyle: 'none' }}><a href="#">Hypothyroidism</a></li>
              <li style={{ listStyle: 'none' }}><a href="#">Clinic Page</a></li>
              <li style={{ listStyle: 'none' }}><a href="#">About Us</a></li> */}
                          {/* <a href="">Poly Cystic Ovary Syndrome</a> */}
            <Link to="/PCOS">Poly Cystic Ovary Syndrome</Link>
            {/* <a href="">Endometriosis</a> */}
            <Link to="/Endo">Endometriosis</Link>
            {/* <a href="">Hypothyroidism</a> */}
            <Link to="/Hypo">Hypothyroidism</Link>
            {/* <a href="">About Us</a> */}
            <Link to="/AboutUs">About Us</Link>
            </ul>

            <div className="social-media-icons mt-4">
              <a href="https://www.linkedin.com/school/hunter-college/posts/?feedView=all"><img src="./logoLN.png" alt="LinkedIn" /></a>
              <a href="https://www.facebook.com/huntercollege/"><img src="./logoFB.png" alt="Facebook" /></a>
              <a href="https://x.com/Hunter_College?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src="./logoX.png" alt="Twitter" /></a>
              <a href="https://www.instagram.com/huntercollege/?hl=en"><img src="./logoIG.png" alt="Instagram" /></a>
            </div>

            <div>
              {/* <a href="index.html"><img src="./logo.png" id="coverimg" alt="Logo" /></a> */}
            </div>
          </div>
        </div>

      </div>

      <div className="copyright">
        <h2>© Copyright 2025 by Sidrat, Angie, Shana</h2>
      </div>
    </footer>
  );
};

export default Footer;