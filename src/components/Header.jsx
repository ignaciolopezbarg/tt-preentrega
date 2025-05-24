import { Link } from "react-router-dom";
import React, {useState} from 'react'
import Modo from "./Modo"
import Cart from "./Cart"
import "../styles/cart.css"

function Header({cartItems}) {
  const[isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="bg-gray-300 p-4 flex justify-between items-center">
      <img src="/logo.jpeg" alt="Logo" className="w-48 h-24 rounded-xl shadow-lg " />
      <div className="flex flex-col">
        <h1 className="text-xl font-bold">Fruteria-Verduleria-TalentoTech</h1>
        {/* <p className="text-lg font-semibold ">Calidad-Precios Imbatibles- Entrega a Domicilio</p> */}
      </div>
        <nav>
            <ul className="flex flex-row gap-20 text-lg font-bold text-slate-800">
                <li> <Link to = '/'> Home </Link> </li>
                <li> <Link to = '/descuentos'> Descuentos </Link> </li>
                <li> <Link to = '/acerdade'> AboutUs </Link> </li> 
                <li> <Link to = '/contacto'> Contacts </Link> </li>
                <li className="cart-nav">
                  <button onClick={() => setIsCartOpen(true)} className="bg-red-400 w-14 h-14 rounded-full shadow-xl"> <i className="material-icons">shopping_cart</i>
                  </button>
                  <Cart cartItems={cartItems} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
                </li>
               
                                                             
            </ul>
        </nav>
        
         <Modo />
    </header>
  )
}

export default Header