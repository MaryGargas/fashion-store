import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<CategoryPage />} />
      </Routes>
    </>
  );
}

export default App;