import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Okoa</h1>
          <p>Shop for your needs with ease</p>
          <Link to="/shop" className="btn">Start Shopping</Link>
        </div>
        <img src="/okoa-hero-image.jpg" alt="Okoa Hero" className="hero-image" />
      </div>
      <div className="benefits-section">
        <h2>Why Choose Okoa?</h2>
        <div className="benefits-list">
          <div className="benefit">
            <img src="/fast-delivery-icon.svg" alt="Fast Delivery" />
            <p>Fast Delivery</p>
          </div>
          <div className="benefit">
            <img src="/quality-products-icon.svg" alt="Quality Products" />
            <p>Quality Products</p>
          </div>
          <div className="benefit">
            <img src="/customer-support-icon.svg" alt="Customer Support" />
            <p>24/7 Customer Support</p>
          </div>
        </div>
      </div>
      <div className="navigation-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/savings">Savings</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default HomePage;
