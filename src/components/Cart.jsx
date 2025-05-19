import React from "react";
import  "../styles/cart.css";

function Cart({cartItems, isOpen, onClose}) {
  return (
    <div className= {`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Carrito de Compras</h2>
        <button onClick = {onClose} className="close-button  ">X</button>
      </div>
      <div className="cart-content">
{cartItems.length === 0 ? (<p style={{color: 'red'}}> El carrito esta vacio </p> ):
(
  <ul className="cart-item">
    {cartItems.map((item, index) => (
      <li key={index}>
        <h2>{item.product}</h2>
        <p>Precio: ${item.price}</p>
        {/* <p>Cantidad: {item.quantity}</p> */}
        <button><i className="material-icons">trash</i></button>
      </li>
    ))}
  </ul>
)
}
      </div>
    </div>
  );
}

export default Cart;
