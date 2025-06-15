// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

// استيراد ملفات الستايل
import "./styles/reset.css";
import "./styles/utilities.css";
import "./styles/App.css";

// استيراد الصفحات
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ThankYouPage from "./pages/ThankYouPage";
import LoginSignup from "./Auth/LoginSignup";
import MyAccount from "./pages/MyAccount";
import MyOrders from "./pages/MyOrders";
import ConfirmOrder from "./pages/ConfirmOrder"; // ✅ جديد

// استيراد الكمبوننت
import Header from "./components/Header";

// ✅ مكون ReviewOrder اللي بيظهر بدل ConfirmOrder
const ReviewOrder = ({ cartItems }) => {
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "30px",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 0 15px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
        📝 Review Your Order
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cartItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                backgroundColor: "#f8f8f8",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <div>
                <h4>{item.name}</h4>
                <p>Qty: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h3 style={{ fontSize: "24px", marginBottom: "20px" }}>
          Total: ${totalPrice.toFixed(2)}
        </h3>
        <button
          onClick={() => navigate("/checkout")}
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "12px 30px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#333")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#000")}
        >
          Proceed to Checkout 🛍
        </button>
      </div>
    </div>
  );
};

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === product.name);
      if (existing) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems((prevCart) =>
      prevCart.filter((_, i) => i !== indexToRemove)
    );
  };

  const updateQuantity = (index, newQty) => {
    if (newQty < 1) return;
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: newQty } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <BrowserRouter>
      <Header user={user} cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<CategoryPage />} />
        <Route
          path="/product/:id"
          element={<ProductPage addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />
        <Route
          path="/checkout"
          element={<CheckoutPage cartItems={cartItems} clearCart={clearCart} />}
        />
        <Route path="/review" element={<ReviewOrder cartItems={cartItems} />} />
        <Route path="/confirm" element={<ConfirmOrder clearCart={clearCart} />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/auth" element={<LoginSignup />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/account" element={<MyAccount user={user} />} />
        <Route path="/myorders" element={<MyOrders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;