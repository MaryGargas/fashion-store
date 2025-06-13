import React from "react";
import { useNavigate } from "react-router-dom";

function CartPage({ cartItems, removeFromCart }) {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
                borderBottom: "1px solid #ccc",
                paddingBottom: "10px",
              }}
            >
              <div>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <button
            onClick={() => navigate("/confirmorder")}
            style={{
              marginTop: "20px",
              backgroundColor: "pink",
              color: "white",
              border: "none",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
}

export default CartPage;