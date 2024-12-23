import React from "react";
import "./Hero.css"; // Custom CSS for Hero Section

function Hero() {
  return (
    <div className="hero-container">
      {/* Background Image */}
      <div className="hero-background">
        {/* Tagline */}
        <h1>Welcome to the E-Commerce Marketplace</h1>
        <p>Discover amazing deals and shop the latest trends.</p>
        {/* Call-to-Actions */}
        <div className="hero-buttons">
          <button className="btn btn-primary btn-lg">Shop Now</button>
          <button className="btn btn-outline-light btn-lg">Explore Deals</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
