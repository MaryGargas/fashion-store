import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Fashion Brand! 👗✨</h1>
      <p>Your one-stop shop for trendy styles and fresh vibes.</p>
      <button className="shop-btn" onClick={() => window.location.href = "/shop"}>
        Start Shopping 🛍
      </button>
    </div>
  );
};

export default HomePage;