import React, { useContext } from "react";
import ProductsList from "../components/ProductsList";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext.jsx";

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
      <Footer />
    </main>
  );
}
export default Home;