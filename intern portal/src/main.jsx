import React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ THIS is important
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container); // ✅ Use createRoot correctly

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
