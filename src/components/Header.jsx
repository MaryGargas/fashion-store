// components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">🛍 FashionBrand</Link>
      </div>
      <nav className="flex gap-6 text-md font-medium">
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          🛒 Cart
          {cartCount > 0 && (
            <span className="ml-1 bg-pink-500 text-white rounded-full px-2 py-0.5 text-sm">
              {cartCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;