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
    if (!user) {
      setEmail("");
      setPassword("");
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const destination = user.role === "admin" ? "/admin-panel" : "/user";
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
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const users = await response.json();
      const foundUser = users.find(
        (u) => u.email === email && u.password === password
      );

      if (foundUser) {
        login(foundUser);
        toast.success(`¡Bienvenido, ${foundUser.name}!`);
      } else {
        toast.error("Email o contraseña incorrectos.");
        
        // Redirigir automáticamente al registro después de login fallido
        setTimeout(() => {
          const isProduction = window.location.hostname !== 'localhost';
          
          if (isProduction) {
            // En producción, usar parámetros URL
            const baseUrl = import.meta.env.BASE_URL || '/';
            const redirectUrl = `${window.location.origin}${baseUrl}?redirect=register`;
            window.location.href = redirectUrl;
          } else {
            // En desarrollo, usar navigate normal
            navigate("/register");
          }
        }, 2000);
      }
    } catch (error) {
      console.error("Error al conectar con la API:", error);
      toast.error("Error de conexión. Intenta nuevamente.");
      
      // En caso de error de conexión, también redirigir al registro
      setTimeout(() => {
        const isProduction = window.location.hostname !== 'localhost';
        
        if (isProduction) {
          const baseUrl = import.meta.env.BASE_URL || '/';
          const redirectUrl = `${window.location.origin}${baseUrl}?redirect=register`;
          window.location.href = redirectUrl;
        } else {
          navigate("/register");
        }
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-100">
      <div className="flex-grow flex items-center justify-center px-4">
        <main className="w-full max-w-md">
          <div className="bg-white shadow-lg rounded-lg px-8 py-10">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Iniciar Sesión
            </h2>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

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
                  onClick={(e) => {
                    e.preventDefault();
                    logout();
                    
                    const isProduction = window.location.hostname !== 'localhost';
                    
                    if (isProduction) {
                      const baseUrl = import.meta.env.BASE_URL || '/';
                      const redirectUrl = `${window.location.origin}${baseUrl}?redirect=register`;
                      window.location.href = redirectUrl;
                    } else {
                      navigate("/register");
                    }
                  }}
                >
                  Registrate acá
                </span>
              </p>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
