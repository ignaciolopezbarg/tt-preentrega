import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail({ products }) {
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
      <div>
        <p>Cargando productos...</p>;
      </div>
    );
  }

  if (productByName) {
    return (
      <div>
        <h1>Detalles del Producto: {productByName.product}</h1>
        <div>
          <img
            src={productByName.img}
            alt={productByName.product}
            style={{ width: "200px" }}
          />
          <p>Precio: ${productByName.price}</p>
          <p>Descripción: {productByName.description}</p>
          <p>Stock disponible: {productByName.stock}</p>
          <p>Categoría: {productByName.category}</p>
        </div>
      </div>
    );
  }

  if (productById) {
    return (
      <div>
        <h1>Detalles del Producto: {productById.product}</h1>
        <div>
          <img
            src={productById.img}
            alt={productById.product}
            style={{ width: "200px" }}
          />
          <p>Precio: ${productById.price}</p>
          <p>Descripción: {productById.description}</p>
          <p>Stock disponible: {productById.stock}</p>
          <p>Categoría: {productById.category}</p>
        </div>
      </div>
    );
  }

  if (filtrados.length > 0) {
    return (
      <div>
        <h1>Productos en la categoría: {category}</h1>
        <ul>
          {filtrados.map((p) => (
            <li key={p.id}>
              <img src={p.img} alt={p.product} style={{ width: "200px" }} />
              <h2>{p.product}</h2>
              <p>Precio: ${p.price}</p>
              <p>Descripción: {p.description}</p>
              <p>Stock disponible: {p.stock}</p>
              <p>Categoría: {p.category}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return <p>No se encontró el producto: {product || category || id}</p>;
}

export default ProductDetail;
