// src/pages/ReviewOrder.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ReviewOrder.css";

const ReviewOrder = ({ cartItems, confirmOrder }) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="review-container">
      <h2>📝 Review Your Order</h2>
      <div className="order-summary">
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="order-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>Qty: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="total-section">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button onClick={confirmOrder} className="confirm-btn">
          Confirm Order ✅
        </button>
      </div>
    </div>
  );
};

export default ReviewOrder;