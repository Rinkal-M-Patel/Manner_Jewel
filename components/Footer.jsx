// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>We are an independent men's jewellery digital platform with sustainable sourcing at the heart of our products and ensure our suppliers observe the same. </p>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <p>Email: contact@manner.com</p>
            <p>Phone: +447788744412</p>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <p>Connect with us on social media:</p>
            <ul className="social-icons">
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
