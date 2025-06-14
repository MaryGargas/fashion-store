// src/pages/CartPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./CartPage.css";

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  // ✅ حساب التوتال بدون NaN
  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity) || 1;

    // 🧪 للتجربة - تقدري تشيليهم بعدين
    console.log("🔍 السعر:", item.price, "⇨", price);
    console.log("🧮 الكمية:", item.quantity, "⇨", quantity);

    return total + price * quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty 😢</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="item-info">
                <div className="item-name">{item.name}</div>
                <div className="item-price">
                  ${parseFloat(item.price).toFixed(2)}
                </div>
              </div>

              <div className="item-quantity">
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(index, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(index, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="cart-total">
            <strong>Total:</strong> ${totalPrice.toFixed(2)}
          </div>

          <div className="checkout-container" style={{ textAlign: "right", marginTop: "20px" }}>
            <Link to="/confirmorder" className="quantity-btn">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;