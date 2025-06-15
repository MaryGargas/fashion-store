// src/pages/MyOrders.jsx
import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";
import "./MyOrders.css"; // لو عندك ستايل مخصص

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const user = auth.currentUser;
      if (!user) return;

      try {
        const q = query(collection(db, "orders"), where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        const userOrders = [];

        querySnapshot.forEach((doc) => {
          userOrders.push({ id: doc.id, ...doc.data() });
        });

        setOrders(userOrders);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders: ", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p style={{ padding: "20px" }}>⏳ Loading your orders...</p>;

  return (
    <div style={{ padding: "30px" }}>
      <h2> My Orders</h2>
      {orders.length === 0 ? (
        <p>You haven't made any orders yet</p>
      ) : (
        orders.map((order) => {
          const date =
            order.createdAt && typeof order.createdAt.toDate === "function"
              ? order.createdAt.toDate().toLocaleString()
              : "Unknown Date";

          return (
            <div key={order.id} className="order-card">
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Date:</strong> {date}</p>
              <ul>
                {order.items?.map((item, idx) => (
                  <li key={idx}>
                    {item.name} - {item.quantity} × ${item.price}
                  </li>
                )) || <li>No items</li>}
              </ul>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MyOrders;