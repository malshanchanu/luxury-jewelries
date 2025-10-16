import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  const images = [
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ad5e5?w=800",
    "https://images.unsplash.com/photo-1596944948024-92c9bad2b0c3?w=800",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleBrowseClick = () => {
    navigate("/jewelry");
    window.scrollTo(0, 0);
  };

  const handleLearnMoreClick = () => {
    const featuresSection = document.querySelector(".features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <style>
        {`
          .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding: 80px 0 4rem;
            color: white;
            position: relative;
            overflow: hidden;
          }
          
          .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" patternUnits="userSpaceOnUse" width="100" height="100"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
          }
          
          .hero-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
            position: relative;
            z-index: 2;
          }
          
          .hero-text h1 {
            font-size: 3.2rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            line-height: 1.2;
            animation: fadeInUp 1s ease-out;
          }
          
          .highlight {
            background: linear-gradient(45deg, #ffd700, #ffed4e);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: shimmer 3s infinite;
          }
          
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          .hero-text p {
            font-size: 1.2rem;
            margin-bottom: 2.5rem;
            opacity: 0.9;
            line-height: 1.6;
            animation: fadeInUp 1s ease-out 0.2s both;
          }
          
          .hero-buttons {
            display: flex;
            gap: 1rem;
            animation: fadeInUp 1s ease-out 0.4s both;
          }
          
          .cta-button {
            padding: 1rem 2rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            display: inline-block;
            cursor: pointer;
            border: none;
            font-size: 1rem;
            text-align: center;
          }
          
          .cta-button.primary {
            background-color: #fff;
            color: #667eea;
            box-shadow: 0 4px 15px rgba(255,255,255,0.3);
          }
          
          .cta-button.primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            background-color: #f8f9fa;
          }
          
          .cta-button.secondary {
            background-color: transparent;
            color: #fff;
            border: 2px solid #fff;
            backdrop-filter: blur(10px);
          }
          
          .cta-button.secondary:hover {
            background-color: #fff;
            color: #667eea;
            transform: translateY(-3px);
          }
          
          .hero-visual {
            position: relative;
            animation: fadeInRight 1s ease-out;
          }
          
          .hero-image {
            width: 100%;
            height: 400px;
            border-radius: 20px;
            object-fit: cover;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            transition: opacity 1s ease-in-out;
          }
          
          .hero-stats {
            display: flex;
            justify-content: space-around;
            margin-top: 3rem;
            padding: 2rem;
            background: rgba(255,255,255,0.1);
            border-radius: 15px;
            backdrop-filter: blur(10px);
            animation: fadeInUp 1s ease-out 0.6s both;
          }
          
          .stat {
            text-align: center;
          }
          
          .stat h3 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            font-weight: 700;
          }
          
          .stat p {
            opacity: 0.9;
            font-size: 0.9rem;
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @media (max-width: 968px) {
            .hero-content {
              grid-template-columns: 1fr;
              text-align: center;
              gap: 3rem;
            }
            
            .hero-text h1 {
              font-size: 2.5rem;
            }
            
            .hero-buttons {
              justify-content: center;
              flex-wrap: wrap;
            }
            
            .hero-image {
              height: 300px;
            }
          }
          
          @media (max-width: 480px) {
            .hero-text h1 {
              font-size: 2rem;
            }
            
            .hero-text p {
              font-size: 1rem;
            }
            
            .cta-button {
              padding: 0.8rem 1.5rem;
              font-size: 0.9rem;
            }
            
            .hero-stats {
              flex-direction: column;
              gap: 1.5rem;
            }
          }
        `}
      </style>

      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Discover Exquisite <span className="highlight">Jewelry</span>{" "}
            Masterpieces
          </h1>
          <p>
            Bid on stunning, authenticated pieces from around the world. Each
            item is carefully curated by our experts for your peace of mind.
          </p>
          <div className="hero-buttons">
            <button onClick={handleBrowseClick} className="cta-button primary">
              Browse Collection
            </button>
            <button
              onClick={handleLearnMoreClick}
              className="cta-button secondary"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src={images[currentImage]}
            alt="Luxury jewelry"
            className="hero-image"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/600x400/667eea/ffffff?text=Luxury+Jewelry";
            }}
          />
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat">
          <h3>500+</h3>
          <p>Exclusive Pieces</p>
        </div>
        <div className="stat">
          <h3>98%</h3>
          <p>Customer Satisfaction</p>
        </div>
        <div className="stat">
          <h3>24/7</h3>
          <p>Expert Support</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
