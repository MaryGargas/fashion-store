// src/pages/CartPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./CartPage.css";

const CartPage = ({ cartItems = [], removeFromCart, updateQuantity }) => {
  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity) || 1;
    return total + price * quantity;
  }, 0);

  return (
    <div
      className="cart-container"
      style={{
        backgroundColor: "#FFFCEF",
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <h2
        className="cart-title"
        style={{ color: "#AC0000", fontSize: "30px", textAlign: "center" }}
      >
        Your Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center", color: "#999", marginTop: "40px" }}>
          Your cart is empty
        </p>
      ) : (
        <div style={{ maxWidth: "800px", margin: "auto" }}>
          {cartItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#fff",
                padding: "16px",
                marginBottom: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            >
              <div>
                <h4 style={{ margin: 0, color: "#333" }}>{item.name}</h4>
                <p style={{ margin: "4px 0", color: "#777" }}>
                  Price: ${parseFloat(item.price).toFixed(2)}
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button
                  onClick={() => updateQuantity(index, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  style={{
                    backgroundColor: "#eee",
                    border: "none",
                    padding: "6px 12px",
                    fontWeight: "bold",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(index, item.quantity + 1)}
                  style={{
                    backgroundColor: "#eee",
                    border: "none",
                    padding: "6px 12px",
                    fontWeight: "bold",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                style={{
                  backgroundColor: "#AC0000",
                  color: "#fff",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <div style={{ textAlign: "right", marginTop: "30px", fontSize: "20px" }}>
            <strong>Total: ${totalPrice.toFixed(2)}</strong>
          </div>

          <div style={{ textAlign: "right", marginTop: "20px" }}>
            <Link
              to="/confirmorder"
              style={{
                backgroundColor: "#AC0000",
                color: "#fff",
                padding: "12px 24px",
                textDecoration: "none",
                borderRadius: "10px",
                fontWeight: "bold",
              }}
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;