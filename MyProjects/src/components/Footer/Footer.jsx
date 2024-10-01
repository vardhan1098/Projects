import React from "react";
import "./Footer.css";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>Sasi Vardhan Reddy</h2>
          <p>Front-End Developer | Web Enthusiast</p>
          <p>© {new Date().getFullYear()} Sasi Vardhan. All Rights Reserved.</p>
        </div>
        
        <div className="footer-right">
          <h3>Connect with Me</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
              <IoLogoFacebook size="30px" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon">
              <IoLogoInstagram size="30px" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="icon">
              <IoLogoTwitter size="30px" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="icon">
              <IoLogoLinkedin size="30px" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
