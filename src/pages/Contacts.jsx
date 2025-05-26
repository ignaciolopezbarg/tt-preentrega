import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Contacts({cart, quitarDelCarrito}) {
  return (
    <>
    <Header cartItems={cart} quitarDelCarrito = {quitarDelCarrito} />
    <h1>Pagina de Contactos </h1>
    <Footer />
    </>
  )
}

export default Contacts