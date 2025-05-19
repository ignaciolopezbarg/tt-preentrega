import React from "react";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";
import Footer from "../components/Footer";
function Home({ products, loading }) {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen ">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Bienvenidos a Fruteria-Verduleria Talento-Tech
        </h1>
        
        {loading ? (
          <div className="flex flex-col items-center">
            <img
              src="/loading.gif"
              alt="Loading..."
              className="w-64 h-64
               mb-4"
            />
            <p className="text-lg font-medium text-gray-700">Cargando...</p>
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
