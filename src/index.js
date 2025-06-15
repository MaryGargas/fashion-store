// src/index.js أو src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';

// ✅ استدعاء ملفات الستايل
import './styles/reset.css';
import './styles/utilities.css';
import './styles/App.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);