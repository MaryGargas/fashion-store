// src/pages/ProductPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";

const productData = [
  {
    name: "T-shirt Oversized",
    image: "/images/product1.JPG",
    price: "$25",
    description: "Comfortable oversized tee with high quality cotton.",
  },
  {
    name: "Denim Jacket",
    image: "/images/product2.JPG",
    price: "$45",
    description: "Trendy and stylish denim jacket for all seasons.",
  },
  {
    name: "Cargo Pants",
    image: "/images/product3.JPG",
    price: "$35",
    description: "Relaxed fit cargo pants with multiple pockets.",
  },
  {
    name: "Hoodie",
    image: "/images/product4.JPG",
    price: "$30",
    description: "Soft fleece hoodie to keep you warm and cozy.",
  },
  {
    name: "Basic Tee",
    image: "/images/product5.JPG",
    price: "$20",
    description: "Simple and essential basic t-shirt for everyday use.",
  },
  {
    name: "Maxi Skirt",
    image: "/images/product6.JPG",
    price: "$40",
    description: "Elegant and flowy maxi skirt, perfect for any occasion.",
  },
];

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const product = productData[id];

  if (!product) return <h2>Product Not Found</h2>;

  // نحول السعر من "$25" إلى 25
  const numericPrice = parseFloat(product.price.replace("$", ""));

  // نبعت منتج منسق فيه كل الداتا اللي محتاجينها
  const handleAddToCart = () => {
    const formattedProduct = {
      id,
      name: product.name,
      price: numericPrice,
      image: product.image,
    };
    addToCart(formattedProduct);
  };

  return (
    <div className="product-page">
      <div className="product-container">
        <img src={product.image} alt={product.name} className="product-img" />
        <div className="product-info">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">{product.price}</p>
          <button className="add-btn" onClick={handleAddToCart}>
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;