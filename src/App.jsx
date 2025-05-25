import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import FechaDescuento from "./pages/FechaDescuento";
import ProductDetail from "./components/ProductDetail";
import AboutUs from "./pages/AboutUs";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("/data/products.json")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error al obtener productos:", error);
          setLoading(false);
        });
    }, 2000);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home cart={cart} products={products} loading={loading} />}
      />
      <Route path="/descuentos" element={<FechaDescuento cart={cart} />} />
      <Route path="/acercade" element={<AboutUs cart={cart} />} />
      <Route path="/contacto" element={<Contacts cart={cart} />} />
      <Route path="*" element={<NotFound />} />

      {/* Rutas dinamicas */}
      <Route
        path="/products/:id"
        element={<ProductDetail products={products} />}
      />
      <Route
        path="/products/product/:product"
        element={<ProductDetail products={products} />}
      />
      <Route
        path="/products/category/:category"
        element={<ProductDetail products={products} />}
      />
    </Routes>
  );
}

export default App;
