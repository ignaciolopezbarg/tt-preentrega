import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-300 p-2 sm:p-4 mx-2 sm:mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4 lg:gap-0 mt-12 mb-4 shadow-t border-t border-gray-200 relative overflow-hidden w-full max-w-7xl rounded-xl">
      {/* Logo repetido en el fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-10 rounded-xl">
        <div
          className="w-full h-full bg-repeat bg-center rounded-xl"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}logo.jpeg)`,
          }}
        ></div>
      </div>
      <p className="text-base md:text-lg font-semibold text-slate-600 text-center md:text-left z-10">
        &copy; 2025 Ignacio Lopez Barg
      </p>
      <ul className="flex flex-col md:flex-row gap-2 md:gap-6 text-base md:text-lg font-bold text-slate-800 items-center justify-center z-10">
        <li>
          <a
            href="https://goo.gl/maps/xxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Dirección
          </a>
        </li>
        <li>
          <a
            href="mailto:pepe@email.com"
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Email
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Wapp
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://youtube.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition cursor-pointer"
          >
            YouTube
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
