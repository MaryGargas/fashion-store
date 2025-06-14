// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Header = ({ user, cartCount }) => {
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth).catch((error) => {
      console.error("Logout error:", error);
    });
  };

  return (
    <header className="header">
      <div>
        <Link to="/">Fashion Brand</Link>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart ({cartCount})</Link>

        {user ? (
          <>
            <Link to="/myorders" className="nav-link">My Orders</Link>
            <Link to="/account">My Account</Link>
            <span style={{ fontWeight: "bold" }}>👤 {user.email}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/auth">Login / Signup</Link>
        )}
      </div>
    </header>
  );
};

export default Header;