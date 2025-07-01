import React, { createContext, useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeContext } from "./ThemeContext.jsx";
import { AuthContext } from "./AuthContext.jsx";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const themeClass =
    theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white";

  const { user, logout, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [descuento, setDescuento] = useState(0);

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
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: (product.quantity || 0) + 1 }
          : product
      )
    );
    setCart((prevCart) => {
      const exists = prevCart.some((item) => item.id === productId);
      if (exists) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item
        );
      } else {
        const product = products.find((p) => p.id === productId);
        if (product) {
          return [...prevCart, { ...product, quantity: 1 }];
        }
        return prevCart;
      }
    });
  };

  const decrementQuantity = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max((product.quantity || 0) - 1, 0) }
          : product
      )
    );
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max((item.quantity || 0) - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

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
    <CartContext.Provider
      value={{
        cart,
        setCart,
        products,
        setProducts,
        loading,
        setLoading,
        descuento,
        setDescuento,
        handleAddToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
