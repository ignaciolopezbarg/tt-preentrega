

// import { Link, useNavigate } from "react-router-dom";
// import React, { useState, useContext } from "react";
// import Modo from "./Modo";
// import { ThemeContext } from "../context/ThemeContext.jsx";
// import Cart from "./Cart";
// import "../styles/cart.css";

// function Header({ cartItems, quitarDelCarrito, onLogout }) {
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const navigate = useNavigate();

//   return (
//     <header className="bg-gray-300 p-4 flex justify-between items-center">
//       <img
//         src="/logo.jpeg"
//         alt="Logo"
//         className="w-48 h-24 rounded-xl shadow-lg"
//       />
//       <div className="flex flex-col">
//         <h1 className="text-xl font-bold">Fruteria-Verduleria-TalentoTech</h1>
//       </div>
//       <nav>
//         <ul className="flex flex-row gap-8 text-lg font-bold text-slate-800">
//           <li className="hover:text-blue-500">
//             <Link 
//             to="/login" 
//             className="hover:text-blue-500"
//              onClick={() => console.log("Voy a Login")}  
//             >
//               Inicio
//             </Link>
//           </li>
//           <li className="hover:text-blue-500">
//             <Link to="/descuentos" className="hover:text-blue-500"
//              onClick={() => console.log("Navegando a /descuentos")}>
//               Descuentos
//             </Link>
//           </li>
//           <li className="hover:text-blue-500">
//             <Link to="/acercade" className="hover:text-blue-500"
//             onClick={() => console.log("Navegando a /acercade")}>
//               AboutUs
//             </Link>
//           </li>
//           <li className="hover:text-blue-500">
//             <Link to="/contacto" className="hover:text-blue-500">
//               Contacts
//             </Link>
//           </li>
//           <li className="cart-nav">
//             <button
//               onClick={() => setIsCartOpen(true)}
//               className="bg-red-400 w-14 h-14 rounded-full shadow-xl relative"
//             >
//               <i className="material-icons">shopping_cart</i>
//               {cartItems?.length > 0 && (
//                 <span className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
//                   {cartItems.reduce((total, item) => total + item.quantity, 0)}
//                 </span>
//               )}
//             </button>
//             {isCartOpen && (
//               <Cart
//                 quitarDelCarrito={quitarDelCarrito}
//                 cartItems={cartItems}
//                 isOpen={isCartOpen}
//                 onClose={() => setIsCartOpen(false)}
//               />
//             )}
//           </li>
//         </ul>
//       </nav>
//       <button
//         onClick={() => {
//           if (typeof onLogout === "function") {
//             onLogout(); // Llama a la función logout
//             navigate("/login"); // Redirige al login
//           } else {
//             console.error("onLogout no está definido");
//           }
//         }}
//         className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
//       >
//         Cerrar sesión
//       </button>
//       <Modo />
//     </header>
//   );
// }

// export default Header;

import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modo from "./Modo";
import { ThemeContext } from "../context/ThemeContext.jsx";
import Cart from "./Cart";
import "../styles/cart.css";

function Header({ cartItems, quitarDelCarrito, user, login, logout }) {
  // Aquí va el console.log:
  console.log("Valor de user en Header:", user);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <header className="bg-gray-300 p-4 flex justify-between items-center">
      <img
        src="/logo.jpeg"
        alt="Logo"
        className="w-48 h-24 rounded-xl shadow-lg"
      />
      <div className="flex flex-col">
        <h1 className="text-xl font-bold">Fruteria-Verduleria-TalentoTech</h1>
      </div>
      <nav>
        <ul className="flex flex-row gap-8 text-lg font-bold text-slate-800">
          <li className="hover:text-blue-500">
            <Link to="/login" className="hover:text-blue-500">
              Inicio
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/descuentos" className="hover:text-blue-500">
              Descuentos
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/acercade" className="hover:text-blue-500">
              AboutUs
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/contacto" className="hover:text-blue-500">
              Contacts
            </Link>
          </li>
          <li className="cart-nav">
            <button
              onClick={() => setIsCartOpen(true)}
              className="bg-red-400 w-14 h-14 rounded-full shadow-xl relative"
            >
              <i className="material-icons">shopping_cart</i>
              {cartItems?.length > 0 && (
                <span className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>
            {isCartOpen && (
              <Cart
                quitarDelCarrito={quitarDelCarrito}
                cartItems={cartItems}
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
              />
            )}
          </li>
        </ul>
      </nav>
      <div>
        {user ? (
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
          >
            Cerrar sesión
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-700"
          >
            Iniciar sesión
          </button>
        )}
      </div>
      <Modo />
    </header>
  );
}

export default Header;