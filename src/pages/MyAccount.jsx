// src/pages/MyAccount.jsx
import React from "react";
import { auth } from "../firebase.js";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const MyAccount = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/auth");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>My Account</h2>
      {user ? (
        <>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={handleLogout} style={{ marginTop: "1rem" }}>
            Logout
          </button>
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default MyAccount;