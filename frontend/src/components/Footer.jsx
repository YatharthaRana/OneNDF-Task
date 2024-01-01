import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import "../styles/Footer.css";
import logo from "../assets//images/logo.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            {/* Company Name and Logo */}
            <img src={logo} alt="Company Logo" className="company-logo" />
            <p className='address'>
            123, ABC Street, <br/>
            Bangalore, <br/>
            Karnatka - 123456, <br/>
            India.
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            {/* Contact Us */}
            <h3>Contact Us</h3>
            <ul className="list-unstyled">
              <li><a href="#">+91 9876543210</a></li>
              <li><a href="#">onendf@gmail.com</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            {/* Follow Us */}
            <h3>Follow Us</h3>
            <ul className="list-unstyled">
              <li><a href="#"><FaFacebook className='footer-icons' style={{ fontSize: '24px' }} /></a></li>
              <li><a href="#"><FaInstagram className='footer-icons' style={{ fontSize: '24px' }} /></a></li>
              <li><a href="#"><FaLinkedin className='footer-icons' style={{ fontSize: '24px' }} /></a></li>
            </ul>
          </div>

        {/* Separator */}
            <div className="separator"></div>
            {/* Copyright */}
            <div className="copyright">
                <p>&copy; {new Date().getFullYear()} OneNDF. All Rights Reserved.</p>
            </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
