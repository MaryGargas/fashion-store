// src/pages/ConfirmOrder.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ConfirmOrder.css";

const ConfirmOrder = ({ clearCart }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const cartItems = location.state?.cartItems || [];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    province: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleConfirm = (e) => {
    e.preventDefault();

    // ممكن هنا تبعتي البيانات لـ Firebase أو Email أو غيره
    console.log("✅ Order confirmed with shipping info:", formData);

    clearCart();
    navigate("/thankyou");
  };

  return (
    <div className="confirm-order-page" style={{ padding: "40px" }}>
      <h2>📦 Confirm Your Order</h2>

      <form onSubmit={handleConfirm} style={{ marginBottom: "30px" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            onChange={handleChange}
            style={{ flex: 1 }}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            onChange={handleChange}
            style={{ flex: 1 }}
          />
        </div>
        <input
          type="text"
          name="address"
          placeholder="Street Address"
          required
          onChange={handleChange}
          style={{ width: "100%", marginTop: "10px" }}
        />
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <input
            type="text"
            name="city"
            placeholder="City"
            required
            onChange={handleChange}
            style={{ flex: 1 }}
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            required
            onChange={handleChange}
            style={{ flex: 1 }}
          />
        </div>
        <select
          name="province"
          required
          onChange={handleChange}
          defaultValue=""
          style={{ width: "100%", marginTop: "10px" }}
        >
          <option value="" disabled>
            Select Province
          </option>
          <option value="Cairo">Cairo</option>
          <option value="Giza">Giza</option>
          <option value="Alexandria">Alexandria</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
          style={{ width: "100%", marginTop: "10px" }}
        />
        <button
          type="submit"
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
          Confirm Order 🛍
        </button>
      </form>

      <div>
        <h3>🛒 Items</h3>
        {cartItems.length === 0 ? (
          <p>No items found.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - {item.quantity} × ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ConfirmOrder;