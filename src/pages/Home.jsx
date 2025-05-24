import React from "react";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";
import Footer from "../components/Footer";
// import Ofertas from "../components/Ofertas";
import FechaDescuento from "./FechaDescuento";

function Home({ cart, products, loading }) {
  return (
    <>
      <Header cartItems={cart}/>
      
      <main className="flex flex-col items-center justify-center min-h-screen ">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Bienvenidos a Fruteria-Verduleria Talento-Tech
        </h1>
        
        {loading ? (
          <div className="flex flex-col items-center w-fit">
            <img
              src="/loading.gif"
              alt="Loading..."
              className="w-fit h-64 object-cover rounded-md shadow-md  mb-4"/>
              "
            
            <p className="text-5xl font-medium text-gray-700">Cargando...</p>
          </div>
        ) : (
          <ProductsList products={products} />
        )}
       
        <Footer />
      </main>
    </>
  );
}

export default Home;
