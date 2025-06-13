import React from "react";
import { Link } from "react-router-dom";
import "./CategoryPage.css";

const CategoryPage = () => {
  const products = [
    { name: "T-shirt Oversized", image: "/images/product1.JPG" },
    { name: "Denim Jacket", image: "/images/product2.JPG" },
    { name: "Cargo Pants", image: "/images/product3.JPG" },
    { name: "Hoodie", image: "/images/product4.JPG" },
    { name: "Basic Tee", image: "/images/product5.JPG" },
    { name: "Maxi Skirt", image: "/images/product6.JPG" },
  ];

  return (
    <div className="category-page">
      <h2 className="title">Shop All Products 🛍</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <Link to={`/product/${index}`} className="product-link">
              <img
                src={product.image}
                alt={product.name}
                className="product-img"
              />
              <p className="product-name">{product.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;