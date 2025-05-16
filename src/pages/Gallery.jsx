import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header"
import Footer from "../components/Footer"

function Gallery({ product, addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  return (
    
    <motion.div>
        <Header />
      <h2>Lista de Productos</h2>
      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0.2, scale: 0.3, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, x: -100 }}
        transition={{ duration: 2.5 }}
      >
        {products.map((product) => (
          <motion.li
            key={product.id}
            className="border p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: product.id * 0.3 }}
          >
            <img
              src={product.img}
              alt={product.product}
              className="mx-auto w-80 h-60 object-cover rounded-md"
            />
            <h2 className="text-xl font-bold mt-2">{product.product}</h2>
            <p className="text-lg">{product.description}</p>
            <span className="text-lg text-green-600 font-semibold">
              Precio: $ {product.price}
            </span>
            <p className="text-sm">Stock: {product.stock} kg</p>
            <p className="text-sm font-medium">Categoría: {product.category}</p>
            <section className="flex flex-row gap-20">
              <button
                className="mt-3 px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-blue-500 transition duration-500"
                onClick={addToCart}
              >
                Agregar al Carrito
              </button>
            </section>
          </motion.li>
        ))}
      </motion.ul>
      <Footer />
    </motion.div>
  );
}

export default Gallery;