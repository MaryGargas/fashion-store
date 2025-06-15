// src/pages/ReviewOrder.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ReviewOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const shippingInfo = location.state?.shippingInfo || {};
  const cartItems = location.state?.cartItems || [];

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleNext = () => {
    navigate("/confirmorder", {
      state: {
        shippingInfo,
        cartItems,
      },
    });
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>📝 Review Your Order</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>Shipping Info</h3>
        <p>Name: {shippingInfo.firstName} {shippingInfo.lastName}</p>
        <p>Address: {shippingInfo.address}, {shippingInfo.city}</p>
        <p>Province: {shippingInfo.province}</p>
        <p>Postal Code: {shippingInfo.postalCode}</p>
        <p>Phone: {shippingInfo.phone}</p>
      </div>

      <div>
        <h3>Items</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <ul>
            {cartItems.map((item, i) => (
              <li key={i}>
                {item.name} - {item.quantity} × ${item.price}
              </li>
            ))}
          </ul>
        )}
        <p style={{ marginTop: "15px", fontWeight: "bold" }}>
          Total: ${totalPrice.toFixed(2)}
        </p>
      </div>

      <button
        onClick={handleNext}
        style={{
          marginTop: "20px",
          padding: "10px 25px",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Continue to Confirm ✅
      </button>
    </div>
  );
};

export default ReviewOrder;