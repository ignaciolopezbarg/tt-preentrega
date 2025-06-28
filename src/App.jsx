import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
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
import ProductDetail from "./components/ProductDetail";
import AboutUs from "./pages/AboutUs";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const { theme } = useContext(ThemeContext);
  const themeClass =
    theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white";
 
    const { user, logout, login } = useContext(AuthContext);
  const navigate = useNavigate();
    const location = useLocation();

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
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

  // Carrito
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

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const incrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Solo redirección al login si no hay usuario y la ruta no es pública
  useEffect(() => {
    const publicRoutes = [
      "/register",
      "/login",
      "/descuentos",
      "/acercade",
      "/contacto",
    ];
    const isDynamicRoute = window.location.pathname.startsWith("/products");
    const isKnownRoute =
      publicRoutes.includes(window.location.pathname) ||
      isDynamicRoute ||
      ["/user", "/admin-panel"].includes(window.location.pathname);

    if (!user && !isKnownRoute) {
      navigate("/login");
    }
  }, [user, navigate]);



  return (
    <div className={`min-h-screen ${themeClass}`}>
      <Header
        cartItems={cart}
        quitarDelCarrito={removeFromCart}
        user={user}
        login={login}
        logout={logout}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Login
              key={location.key}
              cart={cart}
              quitarDelCarrito={removeFromCart}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              key={location.key}
              cart={cart}
              quitarDelCarrito={removeFromCart}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              cart={cart}
              quitarDelCarrito={removeFromCart}
            />
          }
        />
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
          path="/admin-panel"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <AdminPanel />
            </PrivateRoute>
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
    </div>
  );
}

export default App;