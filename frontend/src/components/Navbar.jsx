import React from 'react';
import '../styles/Navbar.css'; // Import your CSS file
import logo from "../assets/images/logo.png";

const Navbar = () => {

    function handleSignupClick() {
        window.location.href = "/signup"
    }


  return (
    <nav className="navbar">
      <div className="left-section">
        <button className="signup-button" onClick={handleSignupClick}>Sign Up</button>
      </div>
      <div className="right-section">
        <img className='logo' src={logo} alt="OneNDF" />
        <div className="tabs">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
