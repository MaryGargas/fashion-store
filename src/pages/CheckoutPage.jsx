// src/pages/CheckoutPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const CheckoutPage = ({ cartItems }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    province: "",
    phone: "",
  });

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ نروح لـ صفحة المراجعة ومعانا البيانات
    navigate("/review", {
      state: {
        shippingInfo: formData,
        cartItems: cartItems,
      },
    });
  };

  return (
    <div className="checkout-page">
      <form className="shipping-form" onSubmit={handleSubmit}>
        <h2>Shipping Information</h2>
        <div className="input-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          name="address"
          placeholder="Street Address"
          required
          onChange={handleChange}
        />
        <div className="input-group">
          <input
            type="text"
            name="city"
            placeholder="City"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            required
            onChange={handleChange}
          />
        </div>
        <select
          name="province"
          required
          onChange={handleChange}
          defaultValue=""
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
        />
        <button type="submit" className="next-btn">
          Next
        </button>
      </form>

      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {cartItems.map((item, i) => (
            <li key={i}>
              {item.name} × {item.quantity}
            </li>
          ))}
        </ul>
        <hr />
        <p>
          <strong>Total: </strong>
          {cartItems
            .reduce((total, item) => total + item.quantity * item.price, 0)
            .toFixed(2)}{" "}
          EGP
        </p>
      </div>
    </div>
  );
};

export default CheckoutPage;