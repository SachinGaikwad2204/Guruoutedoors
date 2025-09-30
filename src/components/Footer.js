// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Guru Outdoors</h3>
          <p>Leading outdoor advertising and event management solutions.</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Mobile Van Advertising</Link></li>
            <li><Link to="/services">Event Management</Link></li>
            <li><Link to="/services">Brand Promotion</Link></li>
            <li><Link to="/services">Outdoor Campaigns</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p><i className="fas fa-map-marker-alt"></i> Maharashtra, India</p>
          <p><i className="fas fa-phone"></i> +91 XXXXX XXXXX</p>
          <p><i className="fas fa-envelope"></i> info@guruoutdoors.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Guru Outdoors. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;