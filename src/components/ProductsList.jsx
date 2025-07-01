import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProductsList() {
  const { products, handleAddToCart } = useContext(CartContext);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center">Galería de Productos</h1>
      <motion.div>
        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5"
          initial={{ opacity: 0.2, scale: 0.3, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: -100 }}
          transition={{ duration: 2.5 }}
        >
          {products.map((product) => (
            <motion.li
              key={product.id}
              className="border p-4 rounded-lg shadow-md bg-white flex flex-col justify-between min-h-[430px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: product.id * 0.3 }}
            >
              {/* Contenido superior */}
              <div>
                <img
                  src={product.img}
                  alt={product.product}
                  className="mx-auto w-80 h-60 object-cover rounded-md"
                />
                <h2 className="text-xl text-gray-700 font-bold mt-2">{product.product}</h2>
                <p className="text-lg text-gray-500">{product.description}</p>
                <span className="text-lg text-green-600 font-semibold">
                  Precio: $ {product.price}
                </span>
                <p className="text-sm text-gray-500">Stock: {product.stock} kg</p>
                <p className="text-sm font-medium text-gray-500">Categoría: {product.category}</p>
              </div>
              {/* Botones */}
              <div className="flex flex-col gap-2 mt-3 w-full">
                <button
                  className="w-full px-2 py-1 bg-blue-600 text-white rounded shadow hover:bg-blue-800 transition-colors text-sm font-medium"
                  onClick={() => handleAddToCart(product)}
                >
                  Agregar al Carrito
                </button>
                <Link to={`/products/${product.id}`} className="w-full">
                  <button
                    className="w-full px-1 py-0.5 bg-blue-500 text-white rounded shadow hover:bg-blue-700 transition-colors text-xs font-medium"
                    type="button"
                  >
                    Ver Detalles
                  </button>
                </Link>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </>
  );
}

export default ProductsList;
