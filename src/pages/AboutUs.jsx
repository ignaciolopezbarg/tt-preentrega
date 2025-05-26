import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function AboutUs({cart, quitarDelCarrito}) {
  return (
    <>
    <Header cartItems={cart} quitarDelCarrito = {quitarDelCarrito} />
    <h1>Acerca de Nosotros</h1>
    <Footer />
    </>
  )
}

export default AboutUs