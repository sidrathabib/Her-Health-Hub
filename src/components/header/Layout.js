import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
              share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/PCOS">Poly Cystic Ovary Syndrome</Link>
          </li>
          <li>
            <Link to="/Endo">Endometriosis</Link>
          </li>
          <li>
            <Link to="/Hypo">NHypothyroidism</Link>
          </li>
          <li>
            <Link to="/ClinicSearch">Search for a Clinic</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
        </ul>
      </nav>

      {/* <hr /> */}

      {/* An <Outlet> renders whatever child route is currently active,
              so you can think about this <Outlet> as a placeholder for
              the child routes we defined above. */}
      <Outlet />
    </div>
  );
};

export default Layout;
