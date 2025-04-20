import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container mt-5">
        <div className="row">
          {/* Contact Form Section */}
          <div className="col-md-6">
            <div className="contact-form">
              <h3>Contact Us</h3>
              <p>Feel free to reach out to us with any inquiries!</p>
              <form>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" className="form-control" id="subject" placeholder="Subject of your message" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>

          {/* Links and Socials */}
          <div className="col-md-6">
            <h4>Pages</h4>
            <div className="webLinks">
            <ul className="list-unstyled">
              <li><a href="#">Poly Cystic Ovary Syndrome</a></li>
              <li><a href="#">Endometriosis</a></li>
              <li><a href="#">Hypothyroidism</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Clinic Page</a></li>
            </ul>
            </div>


            <div className="social-media-icons mt-4">
              <a href="#"><img src="./logoLN.png" alt="LinkedIn" /></a>
              <a href="#"><img src="./logoFB.png" alt="Facebook" /></a>
              <a href="#"><img src="./logoX.png" alt="Twitter" /></a>
              <a href="#"><img src="./logoIG.png" alt="Instagram" /></a>
            </div>

            <div className="mt-3">
              <a href="index.html">
                <img src="./hubLogo.png" id="coverimg" alt="Her Health Hub Logo" />
              </a>
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
