// AboutPage.js

import React from 'react';
import "../styles/About.css"
import about from "../assets/images/about.jpg"

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <img src={about} alt="About Us" />
        <h1 className='about'>About Us</h1>
      </div>

      <p>
        Welcome to OneNDF - your trusted loan marketplace. Our mission is to
        provide users with a seamless experience in finding the best loan options
        that suit their needs.
      </p>
      <p>
        At OneNDF, we believe in transparency, security, and efficiency. Whether
        you're looking for a personal loan, a home loan, or any other financial
        assistance, we're here to help you through the process.
      </p>
      <p>
        Feel free to explore our platform, discover the various loan options
        available, and initiate your loan application with confidence.
      </p>
    </div>
  );
};

export default AboutPage;
