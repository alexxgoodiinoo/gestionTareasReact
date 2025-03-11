import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./components/Context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Metemos toda la app en AuthProvider para que pueda obtener todas las funciones que vamos a usar */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);

