// src/pages/CategoryPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./CategoryPage.css";

const categories = [
  { name: "Rings", color: "#f6c1c1" },
  { name: "Earrings", color: "#dcd1ff" },
  { name: "Clay", color: "#ffe8cc" },
  { name: "Necklaces", color: "#c7f9cc" },
  { name: "Bracelets", color: "#ffd6e0" },
  { name: "Customize Your Order", color: "#fbe7ff" },
];

const CategoryPage = () => {
  return (
    <div
      className="category-container"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "60px 20px",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "32px",
          marginBottom: "40px",
          color: "#AC0000",
        }}
      >
        Explore Our Categories
      </h2>

      <div
        className="categories-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        {categories.map((cat, index) => (
          <Link
            key={index}
            to={'/category/${cat.name.toLowerCase().replace(/\s/g, "-")}'}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "160px",
              borderRadius: "18px",
              backgroundColor: cat.color,
              textDecoration: "none",
              color: "#333",
              fontWeight: "bold",
              fontSize: "18px",
              textAlign: "center",
              padding: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;