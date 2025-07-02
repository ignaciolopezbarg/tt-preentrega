import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
    <h2>Cargando ...</h2>
      <img
        src= {`${import.meta.env.BASE_URL}images/404.png`}
        alt="Página no encontrada"
        style={{ width: "400px", margin: "20px auto" }}
      />
      <section className="bg-zinc-300 mx-auto mb-4  w-fit text-center text-lg font-semibold p-6 rounded-lg shadow-lg">
        <p>Lo sentimos, la página que buscas no existe.</p>
        <p>Por favor, verifica la URL o vuelve a la página de inicio.</p>
        <Link to="/">
          <button className="bg-red-400 w-40  rounded-lg shadow-xl">Volver al Inicio</button>
        </Link>
      </section>
    </>
  );
}

export default NotFound;
