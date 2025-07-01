import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import es from "date-fns/locale/es";
// import Header from "../components/Header";
import Footer from "../components/Footer";

const zonas = [
  {
    zona: 1,
    descripcion: "Belgrano, Nuñez, Palermo",
    descuentos: [
      { dia: "lunes", descuento: 10 },
      { dia: "martes", descuento: 15 },
    ],
  },
  {
    zona: 2,
    descripcion: "Recoleta, Retiro, San Telmo",
    descuentos: [
      { dia: "miércoles", descuento: 5 },
      { dia: "jueves", descuento: 10 },
    ],
  },
  {
    zona: 3,
    descripcion: "Villa Lugano, Mataderos, Flores",
    descuentos: [
      { dia: "viernes", descuento: 20 },
      { dia: "sábado", descuento: 15 },
    ],
  },
];

const FechaDescuento = ({  setDescuento }) => {
  const [zona, setZona] = useState(null);

  function obtenerDiaHoy() {
    const hoy = new Date();
    return format(hoy, "eeee", { locale: es });
  }
  const navigate = useNavigate();

  const verificarDescuento = async () => {
    const { value: zonaIngresada } = await Swal.fire({
      title: "Ingrese la zona",
      input: "number",
      inputLabel: "Zona (1, 2 o 3)",
      inputPlaceholder: "Escriba el número de la zona",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
      inputValidator: (value) => {
        if (!value || isNaN(value)) {
          return "Por favor, ingrese un número válido";
        }
      },
    });

    if (!zonaIngresada) {
      return;
    }

    const zonaSeleccionada = parseInt(zonaIngresada);
    setZona(zonaSeleccionada);

    const zonaData = zonas.find((z) => z.zona === zonaSeleccionada);
    if (zonaData) {
      const diaActual = obtenerDiaHoy();
      const descuentoDia = zonaData.descuentos.find((d) => d.dia === diaActual);
      if (descuentoDia) {
         setDescuento(descuentoDia.descuento);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "¡Hoy hay ofertas! 🛒",
          html: `El descuento para la zona ${zonaSeleccionada} (${zonaData.descripcion}) es del ${descuentoDia.descuento}% para el total de la compra, el día ${diaActual}.`,
          showConfirmButton: true,
          confirmButtonText: "OK",
          timer: 4000,
          willClose: () => navigate("/user"),
        });
      } else {
        setDescuento(0);
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Lo sentimos...",
          text: `No hay descuento disponible para la zona ${zonaSeleccionada} (${zonaData.descripcion}) el día ${diaActual}.`,
          showConfirmButton: false,
          timer: 2500,
           willClose: () => navigate("/user"),
        });
      }
    } else {
      setDescuento(0);
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "Lo sentimos...",
        text: "Zona no válida, por favor ingrese 1, 2 o 3.",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  return (
    <div>
      
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
        <p className="text-gray-700 bold mb-4">
          Bienvenido/a. En esta página podrás consultar los descuentos
          disponibles según tu zona. A continuación, encontrarás una tabla con
          las zonas y sus barrios correspondientes. ¡Aprovecha las ofertas del
          día!
        </p>
        <p className="text-gray-700 mb-4 text-center">
          <span className="font-bold bg-slate-300 rounded-lg p-3">Los dias domingos NO hay descuentos</span>
        </p>
        <h2 className="text-lg font-bold mb-2 text-center">Zonas y Barrios</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-center text-gray-950 bold  ">Barrios</th>
              <th className="border border-gray-300 px-4 py-2 text-center text-gray-950 bold ">Zona</th>
              <th className="border border-gray-300 px-4 py-2 text-center text-gray-950 bold ">Dias</th>
            </tr>
          </thead>
          <tbody>
            {zonas.map((zona) => (
              <tr key={zona.zona} className="hover:bg-gray-100 text-blue-700">
                <td className="border border-gray-300 px-4 py-2 text-gray-800 font-bold text-center">
                  Zona {zona.zona}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {zona.descripcion}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
  {zona.descuentos.map((d) => d.dia).join(", ")}
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h1 className="text-2xl font-bold mb-4 text-center text-red-500">Descuento del día</h1>
      <div className="flex justify-center">
        <button
          onClick={verificarDescuento}
          className="bg-blue-900 hover:bg-red-500 text-white px-4 py-2 rounded"
        >
          Verificar Descuento
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default FechaDescuento;