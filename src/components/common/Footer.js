import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Brighter Land Global Mission</h3>
            <p>Transforming lives through education and community development, creating lasting impact in communities worldwide.</p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram" />
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/programs">Programs</Link>
              </li>
              <li>
                <Link to="/impact">Impact</Link>
              </li>
              <li>
                <Link to="/donate">Donate</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Programs</h3>
            <ul>
              <li>
                <Link to="/programs/education-sponsorship">Education Sponsorship</Link>
              </li>
              <li>
                <Link to="/programs/mission-and-evangelism">Mission and Evangelism</Link>
              </li>
              <li>
                <Link to="/programs/community-development">Community Development</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li>
                <i className="fas fa-map-marker-alt" />
                <span>123 Global Street, City, Country</span>
              </li>
              <li>
                <i className="fas fa-phone" />
                <span>+1 234 567 890</span>
              </li>
              <li>
                <i className="fas fa-envelope" />
                <span>info@globalmission.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Brighter Land Global Mission. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 