import React from "react";
import { obtenerOfertasHoy } from "../utils/util.js";

function BotonOfertas() {
  const mostrarOfertas = () => {
    console.log("El botón se ha presionado");

    const ofertasHoy = obtenerOfertasHoy();
    

    if (ofertasHoy.length > 0) {
     

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "¡Hoy hay ofertas! 🛒",
        html: ofertasHoy
          .map(
            (o) =>
              `<strong>${o.articulo}</strong> con ${o.entidad} con ${o.descuento}% de descuento`
          )
          .join("<br>"),
        showConfirmButton: true,
        confirmButtonText: "OK",
        timer: 5000,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "Lo sentimos...",
        text: "Hoy no hay ofertas disponibles 😢",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  return (
    <div className="flex justify-center items-center p-2">
      <button
        className="bg-red-400 hover:bg-red-600 rounded-md h-30 w-60 p-3 text-xl text-slate-700 flex justify-center items-center"
        onClick={mostrarOfertas}
      >
        OFERTAS DEL DÍA
      </button>
    </div>
  );
}

export default BotonOfertas;