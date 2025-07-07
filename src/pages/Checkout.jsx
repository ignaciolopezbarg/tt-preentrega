import React from 'react'
import Swal from 'sweetalert2'
import { useState } from 'react'
import ContadorLikes from '../components/ContadorLikes'
import Footer from '../components/Footer'
function Checkout() {
  return (
    <div className='p-4 sm:p-6 lg:p-8 text-center max-w-7xl mx-auto'>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">¡Gracias por tu compra!</h2>
      <p className='text-base sm:text-lg text-center font-semibold mb-2'>Tu pedido ha sido procesado correctamente.</p>
      <p className='text-base sm:text-lg text-center font-bold mb-6 sm:mb-8'>Recibirás un correo de confirmación con los detalles de tu compra.</p>
      
      <ContadorLikes />
      
      <div className="mt-6 sm:mt-8">
        <Footer />
      </div>
    </div>
  )
}

export default Checkout