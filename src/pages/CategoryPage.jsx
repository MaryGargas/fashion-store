import React from "react";
import { Link } from "react-router-dom";
import "./CategoryPage.css";
import Navbar from "../components/Navbar";

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
    <>
    <Navbar/>
    <div className="category-page">
      <h2 className="title mb-5">Shop All Products 🛍</h2>
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="product-card">
                <Link to={`/product/${index}`} className="product-link">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-img img-fluid"
                  />
                  <p className="product-name">{product.name}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
};


export default CategoryPage;
