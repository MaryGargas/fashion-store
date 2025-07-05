import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <Navbar />

      {/*  Background Section with Logo + Search + Socials */}
      <div
        className="home"
        style={{
          backgroundImage: "url('/images/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "140vh",
          paddingTop: "80px",
          textAlign: "center",
          color: "#333",
        }}
      >
        {/*  Logo */}
        <img src="/images/logo.jpg" alt="Basma Logo" className="logo" />
         {/* Slogan */}
  <p className="slogan">Your Signature Touch.</p>

        {/*  Search Bar */}
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">Go</button>
        </div>

        {/*  Shop Button */}
        <Link to="/shop" className="shop-btn">
          Shop Now
        </Link>

        {/*  Social Media Links */}
        <div className="socials">
          <a
            href="https://www.instagram.com/mary_arttown?igsh=dms3OWQydndkNTdq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/instagram-icon.png"
              alt="Instagram"
              className="social-icon"
            />
            <span>Find us on Instagram</span>
          </a>

          <a
            href="https://wa.me/201020124121"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/whatsapp-icon.png"
              alt="WhatsApp"
              className="social-icon"
            />
            <span>Contact us on WhatsApp</span>
          </a>

          <a href="marygargas13@gmail.com">
            <img
              src="/images/gmail-icon.png"
              alt="Gmail"
              className="social-icon"
            />
          </a>
        </div>
      </div>

      {/*  Footer */}
      <footer className="footer">
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Basma Brand. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default HomePage;