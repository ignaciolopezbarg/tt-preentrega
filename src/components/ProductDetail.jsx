// import React from "react";
// import { useParams } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";

// function ProductDetail({ products, cart, quitarDelCarrito }) {
//   const { id, category, product } = useParams();

//   const productById = id ? products.find((p) => p.id === parseInt(id)) : null;

//   const filtrados = category
//     ? products.filter(
//         (p) => p.category.toLowerCase() === category.toLowerCase()
//       )
//     : [];

//   const productByName = product
//     ? products.find((p) => p.product.toLowerCase() === product.toLowerCase())
//     : null;

//   if (!products.length) {
//     return (
//       <div>
//         <p>Cargando productos...</p>;
//       </div>
//     );
//   }

//   if (productByName) {
//     return (
//       <div>
//         <Header cartItems={cart} quitarDelCarrito = {quitarDelCarrito} />
//         <h1>Detalles del Producto: {productByName.product}</h1>
//         <div>
//           <img
//             src={productByName.img}
//             alt={productByName.product}
//             style={{ width: "200px" }}
//           />
//           <p>Precio: ${productByName.price}</p>
//           <p>Descripción: {productByName.description}</p>
//           <p>Stock disponible: {productByName.stock}</p>
//           <p>Categoría: {productByName.category}</p>
//         </div>
//         <Footer />
//       </div>
//     );
//   }

//   if (productById) {
//     return (
//       <div>
//         <Header cartItems={cart} quitarDelCarrito = {quitarDelCarrito} />
//         <h1>Detalles del Producto: {productById.product}</h1>
//         <div>
//           <img
//             src={productById.img}
//             alt={productById.product}
//             style={{ width: "200px" }}
//           />
//           <p>Precio: ${productById.price}</p>
//           <p>Descripción: {productById.description}</p>
//           <p>Stock disponible: {productById.stock}</p>
//           <p>Categoría: {productById.category}</p>
//         </div>
//         <Footer />
//       </div>
//     );
//   }

//   if (filtrados.length > 0) {
//     return (
//       <div>
//         <Header cartItems={cart} quitarDelCarrito = {quitarDelCarrito} />
//         <h1>Productos en la categoría: {category}</h1>
//         <ul>
//           {filtrados.map((p) => (
//             <li key={p.id}>
//               <img src={p.img} alt={p.product} style={{ width: "200px" }} />
//               <h2>{p.product}</h2>
//               <p>Precio: ${p.price}</p>
//               <p>Descripción: {p.description}</p>
//               <p>Stock disponible: {p.stock}</p>
//               <p>Categoría: {p.category}</p>
//             </li>
//           ))}
//         </ul>
//         <Footer />
//       </div>
//     );
//   }

//   return <p>No se encontró el producto: {product || category || id}</p>;
// }

// export default ProductDetail;

import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function ProductDetail({ products, cart, quitarDelCarrito }) {
  const { id, category, product } = useParams();

  const productById = id ? products.find((p) => p.id === parseInt(id)) : null;

  const filtrados = category
    ? products.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      )
    : [];

  const productByName = product
    ? products.find((p) => p.product.toLowerCase() === product.toLowerCase())
    : null;

  if (!products.length) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold text-gray-700">Cargando productos...</p>
      </div>
    );
  }

  if (productByName) {
    return (
      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        <Header cartItems={cart} quitarDelCarrito={quitarDelCarrito} />
        <div className="bg-white shadow-md rounded-lg p-6 mt-6 w-11/12 md:w-2/3 lg:w-1/2">
          <h1 className="text-2xl font-bold text-center mb-4">
            Detalles del Producto: {productByName.product}
          </h1>
          <div className="flex flex-col items-center">
            <img
              src={productByName.img}
              alt={productByName.product}
              className="w-48 h-48 object-cover rounded-md mb-4"
            />
            <p className="text-lg font-semibold text-gray-700">
              Precio: <span className="text-green-600">${productByName.price}</span>
            </p>
            <p className="text-gray-600 mt-2">{productByName.description}</p>
            <p className="text-gray-600 mt-2">
              Stock disponible: {productByName.stock}
            </p>
            <p className="text-gray-600 mt-2">
              Categoría: {productByName.category}
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (productById) {
    return (
      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        <Header cartItems={cart} quitarDelCarrito={quitarDelCarrito} />
        <div className="bg-white shadow-md rounded-lg p-6 mt-6 w-11/12 md:w-2/3 lg:w-1/2">
          <h1 className="text-2xl font-bold text-center mb-4">
            Detalles del Producto: {productById.product}
          </h1>
          <div className="flex flex-col items-center">
            <img
              src={productById.img}
              alt={productById.product}
              className="w-48 h-48 object-cover rounded-md mb-4"
            />
            <p className="text-lg font-semibold text-gray-700">
              Precio: <span className="text-green-600">${productById.price}</span>
            </p>
            <p className="text-gray-600 mt-2">{productById.description}</p>
            <p className="text-gray-600 mt-2">
              Stock disponible: {productById.stock}
            </p>
            <p className="text-gray-600 mt-2">
              Categoría: {productById.category}
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (filtrados.length > 0) {
    return (
      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        <Header cartItems={cart} quitarDelCarrito={quitarDelCarrito} />
        <div className="bg-white shadow-md rounded-lg p-6 mt-6 w-11/12 md:w-2/3 lg:w-1/2">
          <h1 className="text-2xl font-bold text-center mb-4">
            Productos en la categoría: {category}
          </h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtrados.map((p) => (
              <li
                key={p.id}
                className="bg-gray-50 shadow-sm rounded-lg p-4 flex flex-col items-center"
              >
                <img
                  src={p.img}
                  alt={p.product}
                  className="w-32 h-32 object-cover rounded-md mb-2"
                />
                <h2 className="text-lg font-semibold">{p.product}</h2>
                <p className="text-gray-600">Precio: ${p.price}</p>
                <p className="text-gray-600">{p.description}</p>
                <p className="text-gray-600">Stock: {p.stock}</p>
                <p className="text-gray-600">Categoría: {p.category}</p>
              </li>
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg font-semibold text-gray-700">
        No se encontró el producto: {product || category || id}
      </p>
    </div>
  );
}

export default ProductDetail;