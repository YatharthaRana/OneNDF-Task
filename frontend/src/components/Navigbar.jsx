import React from 'react';
import logo from '../assets/images/logo.png'; 
import '../styles/Navigbar.css'; 

const Navigbar = () => {
  return (
    <nav className="navbar">
      <div className="left-section">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="right-section">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
};

export default Navigbar;
