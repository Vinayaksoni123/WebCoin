import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./Context/Authprovider.jsx";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router";
export const serverUrl = "http://localhost:3000";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
      <ToastContainer />
    </AuthProvider>
  </BrowserRouter>
);
