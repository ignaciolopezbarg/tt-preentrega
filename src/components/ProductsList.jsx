import React from "react";
import { motion } from "framer-motion";

function ProductsList({ products }) {

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center">Galería de Productos</h1>
      <motion.div>
        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-5"
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
              <section gap-8>
                <button className="bg-slate-100 w-12 h-8 border-4 text-xl  text-gray-800 rounded-md hover:bg-slate-200 ">-</button>
                <span></span>
                <button className= "bg-slate-100 w-12 h-8 border-4 text-xl text-gray-800 rounded-md hover:bg-slate-200 " >+</button>
              </section>
              <section className="flex flex-row gap-20">
                <button
                  className="mt-3 px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-blue-500 transition duration-500"
                  onClick={() => console.log(`Producto agregado: ${product.product}`)}
                >
                  Agregar al Carrito
                </button>
              </section>
              <div>

              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </>
  );
}

export default ProductsList;