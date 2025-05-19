import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
// import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

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
          <Route path="/" element={<Home products={products} loading={loading} />} />
          {/* <Route path="/productos" element={<Gallery />} /> */}
          <Route path="/acerdade" element={<AboutUs />} />
          <Route path="/contacto" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      
    
  );
}

export default App;
