import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function AboutUs({cart}) {
  return (
    <>
    <Header cartItems={cart} />
    <h1>Acerca de Nosotros</h1>
    <Footer />
    </>
  )
}

export default AboutUs