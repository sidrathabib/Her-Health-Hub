import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <header>
      <div className="coverimg-container">
        <a href="index.html"> 
        <img src="hubLogo.png" id="coverimg" />
        </a>
        <p className="subtitle">Empowering Women, Inspiring Health...</p>
      </div>

      <nav className="navbar">
        <div className="container-fluid">
          <a href="">Poly Cystic Ovary Syndrome</a>
          <a href="">Endometriosis</a>
          <a href="">Hypothyroidism</a>
          <a href="">Search for a Clinic</a>
          <a href="">About Us</a>
        </div>
      </nav>
    </header>
  )
}

export default Header