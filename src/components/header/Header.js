import React from "react";
import "./Header.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <div className="coverimg-container">
          <Link to="/">
            <img src="hubLogo.png" id="coverimg" />
          </Link>

          <p className="subtitle">Empowering Women, Inspiring Health...</p>
        </div>

        <nav className="navbar">
          <div className="container-fluid">
            {/* <a href="">Poly Cystic Ovary Syndrome</a> */}
            <Link to="/PCOS">Poly Cystic Ovary Syndrome</Link>
            {/* <a href="">Endometriosis</a> */}
            <Link to="/Endo">Endometriosis</Link>
            {/* <a href="">Hypothyroidism</a> */}
            <Link to="/Hypo">Hypothyroidism</Link>
            {/* <a href="">Search for a Clinic</a> */}
            <Link to="/ClinicSearch">Search for a Clinic</Link>
            {/* <a href="">About Us</a> */}
            <Link to="/AboutUs">About Us</Link>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;

{
  /* <Routes>
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="dashboard" element={<Dashboard />} />
  <Route path="*" element={<NoMatch />} />
</Route>
</Routes> */
}
