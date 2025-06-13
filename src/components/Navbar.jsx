import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">FashionBrand</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;