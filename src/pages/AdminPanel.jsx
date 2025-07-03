import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import FormularioProducto from "../components/FormularioProducto";
import Footer from "../components/Footer";
import {ThemeContext} from "../context/ThemeContext";

const AdminPanel = () => {
  const [productos, setProductos] = useState([]);
  const [form, setForm] = useState({ id: null, name: "", price: "" });
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  // Función para limpiar URLs de imágenes que tienen comillas extra
  const limpiarUrlImagen = (url) => {
    if (!url) return "";
    return url.replace(/^"/, "").replace(/"$/, "");
  };
  //la carga de mockapi venia con errores, entonces con esto se normalizan las imagenes
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://6814d2a7225ff1af162a3ac3.mockapi.io/ecommerce")
        .then((response) => response.json())
        .then((data) => {
          // Limpiar las URLs de las imágenes al cargar los datos
          const productosLimpios = data.map((producto) => ({
            ...producto,
            img: limpiarUrlImagen(producto.img),
          }));

          setProductos(productosLimpios);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error al obtener productos:", error);
          setLoading(false);
        });
    }, 2000);
  }, []);

  const agregarProducto = async (producto) => {
    try {
      const respuesta = await fetch(
        "https://6814d2a7225ff1af162a3ac3.mockapi.io/ecommerce",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(producto),
        }
      );
      if (!respuesta.ok) {
        throw new Error("Error al agregar producto");
      }
      const data = await respuesta.json();

      // Limpiar la URL de la imagen del nuevo producto
      const productoLimpio = {
        ...data,
        img: limpiarUrlImagen(data.img),
      };

      console.log("Producto después de limpiar:", productoLimpio);

      // Actualizar la lista de productos con el nuevo producto
      setProductos((prevProductos) => [...prevProductos, productoLimpio]);

      // Cerrar el formulario
      setOpen(false);

      toast.success("Producto agregado correctamente");
    } catch (error) {
      console.error("Error al agregar producto:", error);
      toast.error("Error al agregar el producto. Por favor, intenta nuevamente.");
    }
  };

  // Función para eliminar un producto
const eliminarProducto = async (id) => {
  const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
  if (confirmacion) {
    try {
      const respuesta = await fetch(`https://6814d2a7225ff1af162a3ac3.mockapi.io/ecommerce/${id}`, {
        method: "DELETE",
      });
      if (!respuesta.ok) {
        throw new Error("Error al eliminar producto");
      }
      setProductos((prevProductos) => prevProductos.filter((producto) => producto.id !== id));
      toast.success("Producto eliminado correctamente");
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      toast.error("Error al eliminar el producto. Por favor, intenta nuevamente.");
    }
  }
};
  return (
    <div className={`min-h-screen p-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          Bienvenido al Panel de Administración
        </h1>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Cargando productos...</p>
          </div>
        ) : (
          <>
            <nav className="mb-8"></nav>

            <div className={`rounded-lg shadow-lg p-6 mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                Gestión de Productos
              </h2>
              <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>En esta pagina podras eliminar, editar, agregar productos:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {productos.map((producto) => (
                  <div
                    key={producto.id}
                    className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden`}
                  >
                    <img
                      src={producto.img}
                      alt={producto.product}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className={`font-semibold text-lg mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                        {producto.product}
                      </h3>
                      <p className={`text-sm mb-2 line-clamp-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {producto.description}
                      </p>
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-sm font-medium px-2 py-1 rounded ${theme === 'dark' ? 'text-blue-300 bg-blue-900' : 'text-blue-600 bg-blue-100'}`}>
                          {producto.category}
                        </span>
                        <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          Stock: {producto.stock}
                        </span>
                      </div>
                      <p className="text-green-600 font-bold text-xl mb-4">
                        ${producto.price}
                      </p>
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 text-sm">
                          Editar
                        </button>
                        <button 
                          onClick={() => eliminarProducto(producto.id)}
                          className="flex-1 bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition-colors duration-200 text-sm"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="text-center mb-6">
          <button
            onClick={() => setOpen(true)}
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium text-lg"
          >
            + Agregar producto nuevo
          </button>
        </div>

        {open && (
          <div className={`rounded-lg shadow-lg p-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <FormularioProducto onAgregar={agregarProducto} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AdminPanel;
