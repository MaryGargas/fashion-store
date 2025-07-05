import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-navbar">
        <button className="menu-icon" onClick={toggleMenu}>
          ☰
        </button>
        <h2 className="brand-logo">بَصْمَة</h2>
      </div>

      {/* Sidebar Menu */}
      <div className={'sidebar-menu ${menuOpen ? "open" : ""}'}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/shop" onClick={toggleMenu}>Shop</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
        <Link to="/account" onClick={toggleMenu}>My Account</Link>
        <Link to="/cart" onClick={toggleMenu}>Cart</Link>
        <Link to="/login" onClick={toggleMenu}>Login</Link>
      </div>
    </>
  );
};

export default Navbar;