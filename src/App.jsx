import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Home from "./pages/Home";
// import AdminPanel from "./components/AdminPanel";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import FechaDescuento from "./pages/FechaDescuento";
import ProductDetail from "./components/ProductDetail";
import AboutUs from "./pages/AboutUs";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      // fetch("/data/products.json")
      fetch("https://6814d2a7225ff1af162a3ac3.mockapi.io/ecommerce")
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

  const handleAddToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  //   const removeFromCart = (productId) => {
  //   setCart((prevCart) =>
  //     prevCart
  //       .map((item) =>
  //         item.id === productId
  //           ? item.quantity > 1
  //             ? { ...item, quantity: item.quantity - 1 } // Reduce la cantidad
  //             : null // Elimina el producto si la cantidad es 1
  //           : item
  //       )
  //       .filter((item) => item !== null) // Filtra los productos eliminados
  //   );
  // };

  const removeFromCart = (productId) => {
    setCart(
      (prevCart) => prevCart.filter((item) => item.id !== productId) // Filtra el producto a eliminar
    );
  };

  const incrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // Elimina productos con cantidad 0
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/admin-panel" element={<AdminPanel />} /> */}
      <Route
        path="/user"
        element={
          <Home
            agregarCarrito={handleAddToCart}
            quitarDelCarrito={removeFromCart}
            incrementarCantidad={incrementQuantity}
            decrementarCantidad={decrementQuantity}
            cart={cart}
            products={products}
            loading={loading}
          />
        }
      />
      <Route
        path="/descuentos"
        element={
          <FechaDescuento cart={cart} quitarDelCarrito={removeFromCart} />
        }
      />
      <Route
        path="/acercade"
        element={<AboutUs cart={cart} quitarDelCarrito={removeFromCart} />}
      />
      <Route
        path="/contacto"
        element={<Contacts cart={cart} quitarDelCarrito={removeFromCart} />}
      />
     

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
       <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
