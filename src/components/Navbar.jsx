import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleLoginClick = () => {
    alert("Login functionality would open here!");
    // In a real app, this would open a login modal or redirect to login page
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <style>
        {`
          .navbar {
            background-color: #fff;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            padding: 0.5rem 0;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            transition: all 0.3s ease;
            height: 60px;
          }
          
          .navbar.scrolled {
            padding: 0.3rem 0;
            height: 55px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          }
          
          .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;
            height: 100%;
          }
          
          .nav-logo {
            text-decoration: none;
            color: #2c3e50;
            font-size: 1.3rem;
            font-weight: 700;
            display: flex;
            align-items: center;
          }
          
          .nav-logo h2 {
            margin: 0;
            font-size: 1.3rem;
          }
          
          .nav-menu {
            display: flex;
            gap: 1.5rem;
            align-items: center;
          }
          
          .nav-link {
            text-decoration: none;
            color: #333;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
            padding: 0.5rem 0;
            font-size: 0.95rem;
          }
          
          .nav-link:hover {
            color: #667eea;
          }
          
          .nav-link.active {
            color: #667eea;
            font-weight: 600;
          }
          
          .nav-link.active::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 3px;
            bottom: 0;
            left: 0;
            background-color: #667eea;
            border-radius: 2px;
          }
          
          .login-button {
            padding: 0.6rem 1.5rem;
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            border: none;
            border-radius: 25px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.9rem;
            margin-left: 1rem;
            box-shadow: 0 2px 10px rgba(102, 126, 234, 0.3);
          }
          
          .login-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
            background: linear-gradient(45deg, #5a6fd8, #6a4190);
          }
          
          .login-button:active {
            transform: translateY(0);
          }
          
          .nav-toggle {
            display: none;
            flex-direction: column;
            cursor: pointer;
            background: none;
            border: none;
            padding: 0.5rem;
          }
          
          .bar {
            width: 25px;
            height: 2px;
            background-color: #333;
            margin: 3px 0;
            transition: 0.3s;
            border-radius: 2px;
          }
          
          .nav-toggle.active .bar:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
          }
          
          .nav-toggle.active .bar:nth-child(2) {
            opacity: 0;
          }
          
          .nav-toggle.active .bar:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
          }
          
          @media (max-width: 768px) {
            .nav-menu {
              position: fixed;
              left: -100%;
              top: 60px;
              flex-direction: column;
              background-color: #fff;
              width: 100%;
              text-align: center;
              transition: 0.3s;
              box-shadow: 0 10px 27px rgba(0,0,0,0.05);
              padding: 2rem 0;
              gap: 1.5rem;
            }
          
            .nav-menu.active {
              left: 0;
            }
          
            .login-button {
              margin-left: 0;
              margin-top: 1rem;
              width: 200px;
            }
          
            .nav-toggle {
              display: flex;
            }
            
            .navbar.scrolled {
              height: 50px;
            }
            
            .nav-container {
              padding: 0 1rem;
            }
          }
        `}
      </style>

      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <h2>💎 Luxury Jewelry</h2>
        </Link>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "active" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/jewelry"
            className={`nav-link ${isActive("/jewelry") ? "active" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Jewelry
          </Link>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>

          <button
            className="login-button"
            onClick={handleLoginClick}
            aria-label="Login to your account"
          >
            Login
          </button>
        </div>

        <button
          className={`nav-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
