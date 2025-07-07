 import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modo from "./Modo";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { CartContext } from "../context/CartContext.jsx";
import Cart from "./Cart";
import "../styles/cart.css";

function Header({ user, logout }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const {
    cart,
  } = useContext(CartContext);

  return (
    <header className="bg-gray-300 p-2 sm:p-4 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
        <img
          src={`${import.meta.env.BASE_URL}logo.jpeg`}
          alt="Logo"
          className="w-32 h-16 sm:w-40 sm:h-20 lg:w-48 lg:h-24 rounded-xl shadow-lg"
        />
        <div className="flex flex-col text-center lg:text-left">
          <h1 className="text-sm sm:text-lg lg:text-xl font-bold">Fruteria-Verduleria-TalentoTech</h1>
        </div>
      </div>
      <nav className="w-full lg:w-auto">
        <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-8 text-sm sm:text-base lg:text-lg font-bold text-slate-800 justify-center items-center">
          <li className="hover:text-blue-500">
            <Link to="/login" className="hover:text-blue-500 px-2 py-1 rounded transition-colors">
              Inicio
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/descuentos" className="hover:text-blue-500 px-2 py-1 rounded transition-colors">
              Descuentos
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/acercade" className="hover:text-blue-500 px-2 py-1 rounded transition-colors">
              AboutUs
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/contacto" className="hover:text-blue-500 px-2 py-1 rounded transition-colors">
              Contacts
            </Link>
          </li>
          <li className="cart-nav">
            <button
              onClick={() => setIsCartOpen(true)}
              className="bg-red-400 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full shadow-xl relative hover:bg-red-500 transition-colors"
            >
              <i className="material-icons text-sm sm:text-base lg:text-lg">shopping_cart</i>
              {cart?.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>
            {isCartOpen && (
              <Cart
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
              />
            )}
          </li>
        </ul>
      </nav>
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
        <div>
          {user ? (
            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="bg-blue-500 text-white px-3 py-1 sm:px-4 sm:py-2 lg:px-5 lg:py-2 rounded hover:bg-blue-700 transition-colors font-medium shadow text-sm sm:text-base"
            >
              Cerrar sesión
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-500 text-white px-3 py-1 sm:px-4 sm:py-2 lg:px-5 lg:py-2 rounded hover:bg-blue-700 transition-colors font-medium shadow text-sm sm:text-base"
            >
              Iniciar sesión
            </button>
          )}
        </div>
        <Modo />
      </div>
    </header>
  );
}

export default Header;
