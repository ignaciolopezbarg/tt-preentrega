import React, { useContext } from "react";
import ProductsList from "../components/ProductsList";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext.jsx";
import QRSearchById from "../components/QRCodeGeneratorbyID.jsx";
import QRSearchByName from "../components/QRSearchbyName.jsx";

function Home() {
  const { products, loading } = useContext(CartContext);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Bienvenidos a Fruteria-Verduleria Talento-Tech
      </h1>
      {loading ? (
        <div className="flex flex-col items-center w-fit">
          <img
            src={`${import.meta.env.BASE_URL}loading.gif`}
            alt="Loading..."
            className="w-fit h-64 object-cover rounded-md shadow-md  mb-4"
          />
          <p className="text-5xl font-medium text-gray-700">Cargando...</p>
        </div>
      ) : (
        <ProductsList />
         
      )}
       
       <section className="w-full max-w-4xl mt-8 mb-8">
        <h2 className="text-xl font-bold text-center mb-6">
          Búsquedas de productos con QR
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          <div className="flex-1 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Por ID</h3>
            <QRSearchById />
          </div>
          <div className="flex-1 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Por Nombre</h3>
            <QRSearchByName />
          </div>
        </div>
      </section>
       
      <Footer />
    </main>
  );
}
export default Home;