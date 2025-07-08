import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
import "../styles/cart.css";

function Cart({ isOpen, onClose }) {
  const navigate = useNavigate();
  const {
      cart,
    setCart,
    descuento,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 0),
    0
  );
  const totalConDescuento = descuento
    ? total * (1 - descuento / 100)
    : total;

  const finalizarCompra = () => {
    setCart([]);
    navigate("/checkout");
  };

  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Carrito de Compras</h2>
        <button onClick={onClose} className="close-button">X</button>
      </div>
      <div className="cart-content">
        {cart.length === 0 ? (
          <p style={{ color: 'red' }}> El carrito está vacío </p>
        ) : (
          <>
            <ul className="cart-item flex flex-col gap-4">
              {cart.map((item) => (
                <li key={item.id} className="flex flex-col gap-1">
                  <h2>{item.product}</h2>
                  <p>Precio: ${item.price}</p>
                  <div className="flex items-center gap-2">
                    <button
                      className="w-6 h-6 bg-slate-100 border text-lg rounded hover:bg-slate-200"
                      onClick={() => decrementQuantity(item.id)}
                    >-</button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      className="w-6 h-6 bg-slate-100 border text-lg rounded hover:bg-slate-200"
                      onClick={() => incrementQuantity(item.id)}
                    >+</button>
                  </div>
                  <button>
                    <i
                      className="material-icons"
                      onClick={() => removeFromCart(item.id)}
                    >delete</i>
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-right font-bold text-lg">
              Total: $
              <span>
                {totalConDescuento.toFixed(2)}
              </span>
              {descuento > 0 && (
                <span className="block text-green-600 text-sm">
                  ¡Descuento aplicado del {descuento}%!
                </span>
              )}
            </div>
            <button
              className="w-full mt-4 bg-gradient-to-r from-green-500 to-green-700 text-white py-2 rounded-lg shadow hover:from-green-600 hover:to-green-800 transition-all font-semibold"
              onClick={() => navigate("/descuentos")}
            >
              Utilizar descuentos
            </button>
            {cart.length > 0 && (
              <button
                className="w-full mt-2 bg-blue-700 text-white py-2 rounded-lg shadow hover:bg-blue-900 transition-all font-semibold"
                onClick={finalizarCompra}
              >
                Finalizar compra
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;