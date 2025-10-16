import React from "react";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div className="homepage">
      <style>
        {`
          .homepage {
            min-height: 100vh;
          }
          
          .features {
            padding: 5rem 0;
            background: #f8f9fa;
          }
          
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }
          
          .features h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: #2c3e50;
          }
          
          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }
          
          .feature-card {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
          }
          
          .feature-card:hover {
            transform: translateY(-5px);
          }
          
          .feature-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
          }
          
          .feature-card h3 {
            margin-bottom: 1rem;
            color: #2c3e50;
          }
          
          .featured-items {
            padding: 5rem 0;
          }
          
          .featured-items h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: #2c3e50;
          }
          
          .items-preview {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
          }
          
          .preview-item {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          }
          
          .preview-image {
            width: 100%;
            height: 200px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            border-radius: 8px;
            margin-bottom: 1rem;
          }
          
          .preview-item h4 {
            margin-bottom: 0.5rem;
            color: #2c3e50;
          }
          
          .view-all-container {
            text-align: center;
          }
          
          .view-all-button {
            display: inline-block;
            padding: 1rem 2rem;
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            transition: transform 0.3s ease;
          }
          
          .view-all-button:hover {
            transform: translateY(-2px);
          }
          
          @media (max-width: 768px) {
            .features h2,
            .featured-items h2 {
              font-size: 2rem;
            }
            
            .features-grid,
            .items-preview {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <Hero />

      <section className="features">
        <div className="container">
          <h2>Why Choose Our Jewelry Auctions?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Expert Authentication</h3>
              <p>
                Every piece is verified by our team of gemologists and jewelry
                experts.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3>Premium Quality</h3>
              <p>
                Only the finest jewelry pieces from renowned makers and
                designers.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Secure Transactions</h3>
              <p>
                Encrypted payments and insured shipping for complete peace of
                mind.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Global Delivery</h3>
              <p>We ship worldwide with careful packaging and tracking.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-items">
        <div className="container">
          <h2>Featured Pieces</h2>
          <div className="items-preview">
            <div className="preview-item">
              <div className="preview-image"></div>
              <h4>Platinum Diamond Ring</h4>
              <p>Starting bid: $2,500</p>
            </div>
            <div className="preview-item">
              <div className="preview-image"></div>
              <h4>Sapphire Gold Bracelet</h4>
              <p>Starting bid: $1,800</p>
            </div>
            <div className="preview-item">
              <div className="preview-image"></div>
              <h4>Pearl Silver Necklace</h4>
              <p>Starting bid: $950</p>
            </div>
          </div>
          <div className="view-all-container">
            <a href="/jewelry" className="view-all-button">
              View All Items
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
