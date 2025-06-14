// src/pages/ConfirmOrder.jsx
import React from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import "./ConfirmOrder.css"; // لو فيه ستايل خارجي

const ConfirmOrder = ({ cartItems, clearCart }) => {
  const navigate = useNavigate();

  const handleConfirmOrder = async () => {
    const user = auth.currentUser;

    if (!user) {
      alert("Please login to confirm your order.");
      return;
    }

    try {
      await addDoc(collection(db, "orders"), {
        userId: user.uid,
        items: cartItems,
        createdAt: Timestamp.now(),
      });

      clearCart(); // 🧹 نفضي السلة بعد الحفظ
      navigate("/thankyou"); // 🚀 نروح لصفحة الشكر
    } catch (error) {
      console.error("❌ Error confirming order:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h2>🧾 Confirm Your Order</h2>
      <p>Total items: {cartItems.length}</p>
      <button onClick={handleConfirmOrder} className="quantity-btn">
        Confirm Order ✅
      </button>
    </div>
  );
};

export default ConfirmOrder;