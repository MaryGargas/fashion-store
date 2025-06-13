import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ConfirmOrder from "./pages/ConfirmOrder";
import ThankYouPage from "./pages/ThankYouPage";
import Header from "./components/Header";
import LoginSignup from "./Auth/LoginSignup"; // ✅ أضفناها

function App() {
  const [cartItems, setCartItems] = useState([]);

  // إضافة للسلة
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // إزالة من السلة
  const removeFromCart = (indexToRemove) => {
    setCartItems((prevCart) => prevCart.filter((_, i) => i !== indexToRemove));
  };

  // تفريغ السلة بعد تأكيد الطلب
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <BrowserRouter>
      <Header cartCount={cartItems.length} />

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
            />
          }
        />
        <Route
          path="/confirmorder"
          element={
            <ConfirmOrder
              cartItems={cartItems}
              clearCart={clearCart}
            />
          }
        />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/auth" element={<LoginSignup />} /> {/* ✅ صفحة اللوجين */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;