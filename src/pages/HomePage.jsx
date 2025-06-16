// src/pages/HomePage.jsx
import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <div
        className="hero-section"
        style={{
          backgroundImage: `url("/images/hero.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textShadow: "0 0 10px rgba(0,0,0,0.7)",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Fashion Starts Here
        </h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "2rem", textAlign: "center" }}>
          Discover the latest trends and shop your style
        </p>
        <a
          href="/shop"
          style={{
            padding: "12px 30px",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "8px",
            fontSize: "1rem",
            textDecoration: "none",
            transition: "0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#333")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#000")}
        >
          Shop Now 🛍
        </a>
      </div>
    </div>
  );
};

export default HomePage;