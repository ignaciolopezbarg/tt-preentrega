import React, { useContext, useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";
import { AuthContext } from "./context/AuthContext";
import Header from "./components/Header";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import FechaDescuento from "./pages/FechaDescuento";
import ProductDetail from "./pages/ProductDetail";
import AboutUs from "./pages/AboutUs";
import PrivateRoute from "./components/PrivateRoute";
import Checkout from "./pages/Checkout";

function App() {
  const { theme } = useContext(ThemeContext);
  const themeClass =
    theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white";

  const { user, logout, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Manejar redirección desde parámetros de URL para producción
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const redirectTo = urlParams.get('redirect');
    
    if (redirectTo === 'register') {
      const baseUrl = import.meta.env.BASE_URL || '/';
      const registerUrl = `${window.location.origin}${baseUrl}register`;
      window.location.replace(registerUrl);
    }
  }, [location.search]);

  const hideHeader =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className={`min-h-screen ${themeClass}`}>
     
      {!hideHeader && <Header user={user} login={login} logout={logout} />}
      <Routes>
        <Route path="/" element={<Login key={location.key} />} />
        <Route path="/login" element={<Login key={location.key} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<Home />} />
        <Route
          path="/admin-panel"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <AdminPanel />
            </PrivateRoute>
          }
        />
        <Route path="/descuentos" element={<FechaDescuento />} />
        <Route path="/acercade" element={<AboutUs />} />
        <Route path="/contacto" element={<Contacts />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/product/:product" element={<ProductDetail />} />
        <Route
          path="/products/category/:category"
          element={<ProductDetail />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
