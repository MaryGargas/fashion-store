// src/pages/HomePage.jsx
import React from "react";
import "./HomePage.css";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <div className="home-container">
        <div
          className="hero-section"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/hero.webp")`,
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
          <p
            style={{
              fontSize: "1.5rem",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Discover the latest trends and shop your style
          </p>
          <a className="btn btn-outline-light" href="/shop">Shop Now</a>
        </div>
      </div>
    </>
  );
};


export default HomePage;