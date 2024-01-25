// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Correctly importing App as the default export
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/context/auth.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
     <AuthProvider>
          <BrowserRouter>
               <App />
          </BrowserRouter>
     </AuthProvider>
);
