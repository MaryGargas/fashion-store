// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"; // نستخدم auth من الملف نفسه
import "./firebase";

// الصفحات
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ConfirmOrder from "./pages/ConfirmOrder";
import ThankYouPage from "./pages/ThankYouPage";
import LoginSignup from "./Auth/LoginSignup";
import MyAccount from "./pages/MyAccount";
import MyOrders from "./pages/MyOrders";

// المكونات
import Header from "./components/Header";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  // متابعة حالة تسجيل الدخول
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // ✅ إضافة منتج للسلة
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

  // ✅ إزالة منتج من السلة
  const removeFromCart = (indexToRemove) => {
    setCartItems((prevCart) =>
      prevCart.filter((_, i) => i !== indexToRemove)
    );
  };

  // ✅ تعديل الكمية بدون ما نمسح السعر
  const updateQuantity = (index, newQty) => {
    if (newQty < 1) return;
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: newQty } : item
      )
    );
  };

  // ✅ تفريغ السلة
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
          path="/confirmorder"
          element={
            <ConfirmOrder cartItems={cartItems} clearCart={clearCart} />
          }
        />
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