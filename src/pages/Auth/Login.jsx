import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../../components/Footer";
import { AuthContext } from "../../context/AuthContext";

const API_URL = "https://683f3f8b1cd60dca33dec719.mockapi.io/users";

function Login() {
  const navigate = useNavigate();
  const { user, login, logout } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("useEffect reset fields - user:", user); // Debug
    if (!user) {
      setEmail("");
      setPassword("");
    }
  }, [user]);

  useEffect(() => {
    console.log("useEffect user change - user:", user); // Debug
    console.log("useEffect user change - location:", window.location.href); // Debug
    if (user) {
      const destination = user.role === "admin" ? "/admin-panel" : "/user";
      console.log("Navegando a:", destination); // Debug
      navigate(destination);
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor completa ambos campos.");
      return;
    }

    try {
      console.log("Intentando login con:", email); // Debug
      console.log("URL de API:", API_URL); // Debug adicional
      console.log("Hostname actual:", window.location.hostname); // Debug para detectar ambiente
      
      const response = await fetch(API_URL);
      console.log("Response status:", response.status); // Debug adicional
      console.log("Response ok:", response.ok); // Debug adicional
      
      if (!response.ok) {
        throw new Error(`Error al obtener usuarios. Status: ${response.status}`);
      }

      const users = await response.json();
      console.log("Usuarios obtenidos:", users.length); // Debug

      const foundUser = users.find(
        (u) => u.email === email && u.password === password
      );

      if (foundUser) {
        console.log("Usuario encontrado:", foundUser.email); // Debug
        toast.success("¡Bienvenido, " + (foundUser.name || foundUser.email) + "!");
        login(foundUser);
        navigate(foundUser.role === "admin" ? "/admin-panel" : "/user");
      } else {
        console.log("Usuario no encontrado, redirigiendo al registro..."); // Debug
        toast.error("Usuario no encontrado. Redirigiendo al registro...");
        
        // Detectar si estamos en producción
        const isProduction = window.location.hostname !== 'localhost';
        console.log("Estamos en producción:", isProduction); // Debug
        
        setTimeout(() => {
          console.log("Navegando a /register"); // Debug
          console.log("BASE_URL:", import.meta.env.BASE_URL); // Debug adicional
          console.log("Estamos en producción:", isProduction); // Debug
          console.log("URL actual antes de navigate:", window.location.href); // Debug
          
          // Intentar ir directamente a la base URL con parámetro de redirección
          if (isProduction) {
            const baseUrl = import.meta.env.BASE_URL || '/';
            const basePageUrl = `${window.location.origin}${baseUrl}?redirect=register`;
            console.log("Redirigiendo a página base con parámetro:", basePageUrl); // Debug
            
            setTimeout(() => {
              console.log("Ejecutando redirección a:", basePageUrl); // Debug
              window.location.href = basePageUrl;
            }, 100);
          } else {
            // En desarrollo usar navigate normal
            navigate("/register");
          }
        }, 1500);
      }
    } catch (error) {
      console.error("Error en login:", error);
      console.error("Error completo:", error.message); // Debug adicional
      
      // Manejar específicamente error 404 de la API
      if (error.message.includes('Status: 404')) {
        console.error("Error 404: La API de usuarios no está disponible");
        toast.error("Error de conexión con la base de datos. Redirigiendo al registro...");
      } else {
        toast.error("Error al iniciar sesión. Intenta más tarde.");
      }
      
      // Detectar si estamos en producción
      const isProduction = window.location.hostname !== 'localhost';
      console.log("Error - estamos en producción:", isProduction); // Debug
      
      // En caso de error de conexión, también redirigir al registro
      setTimeout(() => {
        console.log("Error - navegando a /register"); // Debug
        console.log("Error - BASE_URL:", import.meta.env.BASE_URL); // Debug adicional
        console.log("Error - estamos en producción:", isProduction); // Debug
        
        // Intentar ir directamente a la base URL con parámetro de redirección
        if (isProduction) {
          const baseUrl = import.meta.env.BASE_URL || '/';
          const basePageUrl = `${window.location.origin}${baseUrl}?redirect=register`;
          console.log("Error - Redirigiendo a página base con parámetro:", basePageUrl); // Debug
          
          setTimeout(() => {
            console.log("Error - Ejecutando redirección a:", basePageUrl); // Debug
            window.location.href = basePageUrl;
          }, 100);
        } else {
          // En desarrollo usar navigate normal
          navigate("/register");
        }
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-100">
      <div className="w-full max-w-md mx-auto">
        {/* Logo como banner repetido */}
        <div
          className="w-full h-28 bg-repeat-x bg-center pt-6 mb-4 rounded-xl shadow-lg"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}logo.jpeg)`,
            backgroundSize: "auto 80%",
          }}
        />
        <h1 className="text-3xl font-extrabold text-center text-blue-900 mt-2 mb-1">
          ¡Bienvenido a Talento-Tech!
        </h1>
        <p className="text-center text-gray-700 mb-2">
          Ingresá para disfrutar de la mejor frutería y verdulería online.
        </p>
        <section className="bg-blue-400 text-lg rounded-t-lg px-6 py-4">
          <h2 className="text-center font-bold text-2xl">
            Iniciar sesión
          </h2>
          <h3 className="text-center">
            Si no estás registrado, no podrás acceder al sitio.
          </h3>
        </section>
        <main className="flex-grow flex items-center justify-center">
          <form
            autoComplete="off"
            onSubmit={handleLogin}
            className="w-full p-6 bg-white rounded-b-lg shadow-md"
          >
            <input
              type="email"
              autoComplete="useremail"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              autoComplete="new-password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mb-6 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800 transition"
            >
              Ingresar
            </button>

            <p className="mt-4 text-center text-sm text-gray-500">
              ¿No tenés una cuenta?{" "}
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => {
                  logout();
                  // En producción usar localStorage + redirección a base
                  const isProduction = window.location.hostname !== 'localhost';
                  if (isProduction) {
                    const baseUrl = import.meta.env.BASE_URL || '/';
                    const basePageUrl = `${window.location.origin}${baseUrl}`;
                    console.log("Link - Redirigiendo a página base:", basePageUrl); // Debug
                    
                    localStorage.setItem('redirectTo', '/register');
                    console.log("Link - Guardado en localStorage - redirectTo:", localStorage.getItem('redirectTo')); // Debug
                    
                    setTimeout(() => {
                      console.log("Link - Ejecutando redirección a:", basePageUrl); // Debug
                      window.location.href = basePageUrl;
                    }, 100);
                  } else {
                    navigate("/register");
                  }
                }}
              >
                Registrate acá
              </span>
            </p>
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Login;