import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleLoginClick = () => {
    window.location.href = '/login';
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <style>
        {`
          .navbar {
            background: rgba(20, 23, 32, 0.25);
            -webkit-backdrop-filter: saturate(180%) blur(16px);
            backdrop-filter: saturate(180%) blur(16px);
            border-bottom: 1px solid rgba(255,255,255,0.06);
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
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
            color: #fff;
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
            gap: 1.2rem;
            align-items: center;
          }
          
          .nav-link {
            text-decoration: none;
            color: #fff;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
            padding: 0.5rem 0;
            font-size: 0.95rem;
          }
          
          .nav-link:hover {
            color: var(--accent);
          }
          
          .nav-link.active {
            color: var(--accent);
            font-weight: 600;
          }
          
          .nav-link.active::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: var(--accent);
            border-radius: 2px;
          }
          
          .btn {
            padding: 0.6rem 1.0rem;
            background: linear-gradient(45deg, var(--accent), var(--accent-2));
            color: #0b0b0c;
            border: none;
            border-radius: 25px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.9rem;
            margin-left: 0.5rem;
            box-shadow: 0 2px 10px rgba(197, 165, 114, 0.3);
          }
          
          .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(197, 165, 114, 0.45);
            filter: brightness(1.05);
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
            background-color: #fff;
            margin: 3px 0;
            transition: 0.3s;
            border-radius: 2px;
          }
          
          .nav-toggle.active .bar:nth-child(1) { transform: rotate(-45deg) translate(-5px, 6px); }
          .nav-toggle.active .bar:nth-child(2) { opacity: 0; }
          .nav-toggle.active .bar:nth-child(3) { transform: rotate(45deg) translate(-5px, -6px); }
          
          @media (max-width: 768px) {
            .nav-menu {
              position: fixed;
              left: -100%;
              top: 60px;
              flex-direction: column;
              background: rgba(20, 23, 32, 0.85);
              width: 100%;
              text-align: center;
              transition: 0.3s;
              box-shadow: 0 10px 27px rgba(0,0,0,0.05);
              padding: 2rem 0;
              gap: 1.5rem;
            }
            .nav-menu.active { left: 0; }
            .btn { margin-left: 0; width: 200px; }
            .nav-toggle { display: flex; }
            .navbar.scrolled { height: 50px; }
            .nav-container { padding: 0 1rem; }
          }
        `}
      </style>

      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <h2>💎 CrystalCrown</h2>
        </Link>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/jewelry" className={`nav-link ${isActive("/jewelry") ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>Jewelry</Link>
          <Link to="/checkout" className={`nav-link ${isActive("/checkout") ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>Checkout</Link>
          <Link to="/payment-method" className={`nav-link ${isActive("/payment-method") ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>Payment Method</Link>
          <Link to="/payment-history" className={`nav-link ${isActive("/payment-history") ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>Payment History</Link>
          <Link to="/insurance-options" className={`nav-link ${isActive("/insurance-options") ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>Insurance</Link>
          <Link to="/shipping-insurance" className={`nav-link ${isActive("/shipping-insurance") ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>Shipping Insurance</Link>
          <Link to="/invoice" className={`nav-link ${isActive("/invoice") ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>Invoice</Link>
          <Link to="/upload-cert" className={`nav-link ${isActive("/upload-cert") ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>Upload Cert</Link>
          <Link to="/view-cert" className={`nav-link ${isActive("/view-cert") ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>View Cert</Link>
          <Link to="/gia-certificate" className={`nav-link ${isActive("/gia-certificate") ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>GIA Cert</Link>
          <Link to="/ags-certificate" className={`nav-link ${isActive("/ags-certificate") ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>AGS Cert</Link>
          <Link to="/appraisal-doc" className={`nav-link ${isActive("/appraisal-doc") ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>Appraisal</Link>
          <Link to="/auth-verification" className={`nav-link ${isActive("/auth-verification") ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>Authenticity</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>

          <button className="btn" onClick={toggleTheme} aria-label="Toggle theme">{theme === 'light' ? 'Dark' : 'Light'}</button>
          <button className="btn" onClick={handleLoginClick} aria-label="Login to your account">Login</button>
        </div>

        <button className={`nav-toggle ${isMenuOpen ? "active" : ""}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
