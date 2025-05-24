import React from 'react'
import BotonOfertas from './BotonOfertas';

const articulos = [
  "frutas",
  "verduras"
];

export const ofertas = [
  {
    id: 1,
    entidad: "ML",
    descuento: 20,
    tope: 8000,
    dia: "viernes",
    articulo: "frutas",
  },
  {
    id: 2,
    entidad: "Cuenta Dni",
    descuento: 25,
    tope: 6000,
    dia: "viernes",
    articulo: "frutas",
  },
  {
    id: 3,
    entidad: "BNA",
    descuento: 15,
    tope: 15000,
    dia: "lunes",
    articulo: "verduras",
  },
  {
    id: 4,
    entidad: "Modo",
    descuento: 20,
    tope: 5000,
    dia: "jueves",
    articulo: "frutas",
  },
  
  {
    id: 5,
    entidad: "Galicia",
    descuento: 10,
    tope: 10000,
    dia: "miercoles",
    articulo: "verduras",
  },
  {
    id: 6,
    entidad: "Santander",
    descuento: 10,
    tope: 10000,
    dia: "martes",
    articulo: "verduras",
  }

];

function Ofertas() {
  return (
    <div className="bg-slate-800 container max-w-fit py-4  mx-auto rounded-3xl">
      <p className=" p-2 h-20 bg-slate-300 text-2xl text-white flex justify-center ">
        Ofertas de la semana
      </p>
      <p className='bg-slate-500 text-xl text-white p-2'>Si estas registrado en el sitio, tenes acceso a estos descuentos, no te los pierdas Registrate!!</p>
      <p className="flex justify-center text-2xl text-slate-100">Items</p>
      <ul className=" w-50 flex flex-col items-center justify-center text-slate-100">
        {articulos.map((articulo, index) => (
          <li key={index}>{articulo}</li>
        ))}
      </ul>

      <h3 className="flex justify-center text-2xl text-orange-300">
        Ofertas disponibles:
      </h3>

      <ul className=" w-50 flex flex-col items-center justify-center">
        {ofertas.map((oferta) => (
          <li className = "w-full flex flex-col items-center justify-center border-2 border-slate-500 border-solid text-slate-100  " key={oferta.id}>
            {oferta.entidad}: {oferta.descuento}%- Hasta: ${oferta.tope} - Día:{" "}
            {""}
            {oferta.dia}- {oferta.articulo}
          </li>
        ))}
      </ul>

      <div className="flex justify-center items-center p-2">
        <BotonOfertas />
      </div>
    </div>
  );
}

export default Ofertas;