import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <style>{`
        .about-page { padding: 120px 0 60px; min-height: 100vh; }
        .section { max-width: 900px; margin: 0 auto; }
        .lead { color: var(--muted); font-size: 1.1rem; }
      `}</style>
      <div className="section">
        <h1>About CrystalCrown</h1>
        <p className="lead">We curate authenticated luxury jewelry and enable secure, insured transactions worldwide.</p>
      </div>
    </div>
  );
};

export default About;


