import React from "react";
import ReactDOM from "react-dom/client"; // ✅ This is required
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ createRoot is now defined
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
