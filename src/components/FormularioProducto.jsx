import React, { useState } from 'react';

const FormularioProducto = ({ onAgregar }) => {
  const [productos, setProductos] = useState({
    product: '',
    price: '',
    description: '',
    category: '',
    stock: '',
    img: ''
  });
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductos({ ...productos, [name]: value });
  };

  const validarFormulario = () => {
    const nuevosErrores = {};
    if (!productos.product) {
      nuevosErrores.product = 'El nombre del producto es obligatorio.';
    }
    if (!productos.price || productos.price <= 0) {
      nuevosErrores.price = 'El precio debe ser mayor a 0 y debe existir.';
    }
    if (!productos.description) {
      nuevosErrores.description = 'La descripción es obligatoria.';
    }
    if (!productos.category) {
      nuevosErrores.category = 'La categoría es obligatoria.';
    }
    if (!productos.stock || productos.stock <= 0) {
      nuevosErrores.stock = 'El stock debe ser mayor o igual a 0.';
    }
    if (!productos.img) {
      nuevosErrores.img = 'La imagen es obligatoria.';
    }

    setErrores(nuevosErrores);
    return nuevosErrores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidados = validarFormulario();
    if (Object.keys(erroresValidados).length > 0) {
      return;
    }
    onAgregar(productos);
    setProductos({
      product: '',
      price: '',
      description: '',
      category: '',
      stock: '',
      img: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Nombre del producto</label>
        <input
          type="text"
          name="product"
          value={productos.product}
          onChange={handleChange}
          className={`border p-2 w-full ${errores.product ? 'border-red-500' : ''}`}
        />
        {errores.product && <p className="text-red-500">{errores.product}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Precio</label>
        <input
          type="number"
          name="price"
          value={productos.price}
          onChange={handleChange}
          className={`border p-2 w-full ${errores.price ? 'border-red-500' : ''}`}
        />
        {errores.price && <p className="text-red-500">{errores.price}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Descripción</label>
        <textarea
          name="description"
          value={productos.description}
          onChange={handleChange}
          className={`border p-2 w-full ${errores.description ? 'border-red-500' : ''}`}
        />
        {errores.description && <p className="text-red-500">{errores.description}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Categoría</label>
        <input
          type="text"
          name="category"
          value={productos.category}
          onChange={handleChange}
          className={`border p-2 w-full ${errores.category ? 'border-red-500' : ''}`}
        />
        {errores.category && <p className="text-red-500">{errores.category}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Stock</label>
        <input
          type="number"
          name="stock"
          value={productos.stock}
          onChange={handleChange}
          className={`border p-2 w-full ${errores.stock ? 'border-red-500' : ''}`}
        />
        {errores.stock && <p className="text-red-500">{errores.stock}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Imagen</label>
        <input
          type="text"
          name="img"
          value={productos.img}
          onChange={handleChange}
          className={`border p-2 w-full ${errores.img ? 'border-red-500' : ''}`}
        />
        {errores.img && <p className="text-red-500">{errores.img}</p>}
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Agregar Producto
      </button>
    </form>
  );
};

export default FormularioProducto;


