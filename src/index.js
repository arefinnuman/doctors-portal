import React from "react";
import "react-day-picker/dist/style.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./Context/AuthProvider";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
