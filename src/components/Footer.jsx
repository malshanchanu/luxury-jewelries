import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <style>
        {`
          .footer {
            background-color: #2c3e50;
            color: #fff;
            padding: 3rem 0 1rem;
          }
          
          .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }
          
          .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
          }
          
          .footer-section h3,
          .footer-section h4 {
            margin-bottom: 1rem;
            color: #fff;
          }
          
          .footer-section ul {
            list-style: none;
          }
          
          .footer-section ul li {
            margin-bottom: 0.5rem;
          }
          
          .footer-section a {
            color: #ecf0f1;
            text-decoration: none;
            transition: color 0.3s ease;
          }
          
          .footer-section a:hover {
            color: #667eea;
          }
          
          .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
          }
          
          .social-links a {
            font-size: 1.5rem;
          }
          
          .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid #34495e;
          }
          
          @media (max-width: 768px) {
            .footer-content {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Luxury Jewelry Auctions</h3>
            <p>
              Discover exquisite pieces from around the world. Each item is
              carefully curated and authenticated.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                📘
              </a>
              <a href="#" aria-label="Instagram">
                📸
              </a>
              <a href="#" aria-label="Twitter">
                🐦
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/jewelry">Jewelry Collection</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              <li>
                <Link to="/jewelry?category=rings">Rings</Link>
              </li>
              <li>
                <Link to="/jewelry?category=necklaces">Necklaces</Link>
              </li>
              <li>
                <Link to="/jewelry?category=bracelets">Bracelets</Link>
              </li>
              <li>
                <Link to="/jewelry?category=earrings">Earrings</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📧 info@luxuryjewelry.com</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>📍 123 Luxury Avenue, Diamond District, NY 10001</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Luxury Jewelry Auctions. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
