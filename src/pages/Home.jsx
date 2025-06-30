import React from "react";
import ProductsList from "../components/ProductsList";
import Footer from "../components/Footer";

function Home({ cart, products, loading, agregarCarrito, quitarDelCarrito, incrementarCantidad, decrementarCantidad }) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Bienvenidos a Fruteria-Verduleria Talento-Tech
      </h1>
      {loading ? (
        <div className="flex flex-col items-center w-fit">
          <img
            src="/loading.gif"
            alt="Loading..."
            className="w-fit h-64 object-cover rounded-md shadow-md  mb-4"
          />
          <p className="text-5xl font-medium text-gray-700">Cargando...</p>
        </div>
      ) : (
        <ProductsList
          products={products}
          agregarCarrito={agregarCarrito}
          incrementarCantidad={incrementarCantidad}
          decrementarCantidad={decrementarCantidad}
        />
      )}
      <Footer />
    </main>
  );
}

export default Home;