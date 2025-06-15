import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{
      textAlign: "center",
      padding: "50px 20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <h1>Welcome to Fashion Brand!</h1>
      <p style={{ fontSize: "18px", margin: "20px 0" }}>
        Find your style with our exclusive collections.
      </p>
      <Link to="/shop" style={{
        padding: "12px 25px",
        backgroundColor: "#ff6f61",
        color: "white",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "16px",
        boxShadow: "0 4px 8px rgba(255,111,97,0.4)",
        transition: "background-color 0.3s ease"
      }}
      onMouseEnter={e => e.currentTarget.style.backgroundColor = "#ff4b3a"}
      onMouseLeave={e => e.currentTarget.style.backgroundColor = "#ff6f61"}
      >
        Shop Now 🛍
      </Link>
    </div>
  );
};

export default HomePage;