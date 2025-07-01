// @/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'aos/dist/aos.css';
import 'aos';  // For AOS JavaScript functionality
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
