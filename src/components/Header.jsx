// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import "./Header.css";

const Header = ({ user, cartCount }) => {
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth).catch((error) => {
      console.error("Logout error:", error);
    });
  };

  return (
    <header className="header bg-light p-3 text-center shadow-sm">
      <h1 className="header-logo">🛍 Fashion Brand</h1>

      <nav className="header__nav mt-3">
        <ul className="nav d-flex justify-content-center align-items-center gap-4 list-unstyled p-0 m-0 flex-wrap">

          {/* Common links */}
          <li><Link className="nav__link" to="/shop">🛒 Shop</Link></li>
          <li><Link className="nav__link" to="/cart">🛍 Cart ({cartCount})</Link></li>

          {/* User-specific links */}
          {user ? (
            <>
              <li><Link className="nav__link" to="/myorders">📦 My Orders</Link></li>
              <li><Link className="nav__link" to="/account">👤 My Account</Link></li>
              <li><button className="nav__link btn-logout" onClick={handleLogout}>🚪 Logout</button></li>
            </>
          ) : (
            <li><Link className="nav__link" to="/auth">🔐 Login / Signup</Link></li>
          )}

        </ul>
      </nav>
    </header>
  );
};

export default Header;