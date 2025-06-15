// src/index.js أو src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';

// ✅ استدعاء ملفات الستايل من styles
import "./styles/elance.css"; // ✅ صح كده
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);