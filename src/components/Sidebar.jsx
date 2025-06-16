import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ user, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Sidebar */}
      <nav className={`sidebar ${isOpen ? "open" : "hidden"}`}>
        <h2 className="logo">FashionBrand</h2>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/shop" onClick={toggleMenu}>Shop</Link></li>
          <li><Link to="/cart" onClick={toggleMenu}>Cart</Link></li>
          <li><Link to="/account" onClick={toggleMenu}>My Account</Link></li>
          <li><Link to="/orders" onClick={toggleMenu}>Orders</Link></li>

          {/* ✅ Sign In / Sign Out */}
          {!user ? (
            <li><Link to="/login" onClick={toggleMenu}>Sign In</Link></li>
          ) : (
            <li><button onClick={() => { handleLogout(); toggleMenu(); }} className="signout-btn">Sign Out</button></li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;