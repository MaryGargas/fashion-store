import React from 'react';
import './HomePage.css'; // علشان نتحكم في الستايل براحتنا

function HomePage() {
  return (
    <div className="home">
      <div className="red-deco deco1" />
      <div className="red-deco deco2" />
      <div className="content">
        <h1 className="brand-name">بصمة</h1>
        <p className="tagline">Where style meets identity </p>
      </div>
    </div>
  );
}

export default HomePage;