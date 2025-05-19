import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Contacts({cart}) {
  return (
    <>
    <Header cartItems={cart} />
    <h1>Pagina de Contactos </h1>
    <Footer />
    </>
  )
}

export default Contacts