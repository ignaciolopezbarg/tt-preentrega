import React from "react";
import {  Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound"
function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Gallery />} />
        <Route path="/acerdade" element={<AboutUs />} />
        <Route path="/contacto" element={<Contacts />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    
  );
}

export default App;
