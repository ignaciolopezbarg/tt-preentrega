import { Link } from "react-router-dom";
import React from 'react'
import Modo from "./Modo"
import Cart from "./Cart"

function Header() {
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
                <li> <Link to = '/productos'> Gallery </Link> </li>
                <li> <Link to = '/acerdade'> AboutUs </Link> </li> 
                <li> <Link to = '/contacto'> Contacts </Link> </li>
               
                                                             
            </ul>
        </nav>
        
         <Modo />
    </header>
  )
}

export default Header