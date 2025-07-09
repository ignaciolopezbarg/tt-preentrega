import React, { useState, useEffect } from "react";

const FormularioProducto = ({ producto, onAgregar, onCancel }) => {
  const [form, setForm] = useState({
    id: null,
    product: "",
    price: "",
    description: "",
    category: "",
    stock: "",
    img: ""
  });
  const [errores, setErrores] = useState({});

  // Sincroniza el formulario con el producto recibido para edición
  useEffect(() => {
    if (producto) {
      setForm({
        id: producto.id || null,
        product: producto.product || "",
        price: producto.price || "",
        description: producto.description || "",
        category: producto.category || "",
        stock: producto.stock || "",
        img: producto.img || ""
      });
    } else {
      setForm({
        id: null,
        product: "",
        price: "",
        description: "",
        category: "",
        stock: "",
        img: ""
      });
    }
  }, [producto]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validarFormulario = () => {
    const nuevosErrores = {};
    if (!form.product) {
      nuevosErrores.product = "El nombre del producto es obligatorio.";
    }
    if (!form.price || form.price <= 0) {
      nuevosErrores.price = "El precio debe ser mayor a 0 y debe existir.";
    }
    if (!form.description) {
      nuevosErrores.description = "La descripción es obligatoria.";
    }
    if (!form.category) {
      nuevosErrores.category = "La categoría es obligatoria.";
    }
    if (!form.stock || form.stock < 0) {
      nuevosErrores.stock = "El stock debe ser mayor o igual a 0.";
    }
    if (!form.img) {
      nuevosErrores.img = "La imagen es obligatoria.";
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
    
    if (producto && producto.id) {
      onAgregar({ ...form, id: producto.id });
    } else {
      onAgregar(form);
    }
    setForm({
      id: null,
      product: "",
      price: "",
      description: "",
      category: "",
      stock: "",
      img: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Nombre del producto</label>
        <input
          type="text"
          name="product"
          value={form.product}
          onChange={handleChange}
          className={`border p-2 w-full ${
            errores.product ? "border-red-500" : ""
          }`}
        />
        {errores.product && <p className="text-red-500">{errores.product}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Precio</label>
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          className={`border p-2 w-full ${
            errores.price ? "border-red-500" : ""
          }`}
        />
        {errores.price && <p className="text-red-500">{errores.price}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Descripción</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className={`border p-2 w-full ${
            errores.description ? "border-red-500" : ""
          }`}
        />
        {errores.description && (
          <p className="text-red-500">{errores.description}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Categoría</label>
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          className={`border p-2 w-full ${
            errores.category ? "border-red-500" : ""
          }`}
        />
        {errores.category && <p className="text-red-500">{errores.category}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Stock</label>
        <input
          type="number"
          name="stock"
          value={form.stock}
          onChange={handleChange}
          className={`border p-2 w-full ${
            errores.stock ? "border-red-500" : ""
          }`}
        />
        {errores.stock && <p className="text-red-500">{errores.stock}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Imagen</label>
        <input
          type="text"
          name="img"
          value={form.img}
          onChange={handleChange}
          className={`border p-2 w-full ${
            errores.img ? "border-red-500" : ""
          }`}
        />
        {errores.img && <p className="text-red-500">{errores.img}</p>}
      </div>
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          {producto ? "Guardar Cambios" : "Agregar Producto"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-400 text-white p-2 rounded"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default FormularioProducto;


