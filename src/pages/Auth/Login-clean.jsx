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
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        login(foundUser);
        toast.success(`¡Bienvenido, ${foundUser.name}!`, {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        toast.error("Credenciales incorrectas", {
          position: "top-right",
          autoClose: 3000,
        });
        
        // Redirección automática a registro después de 2 segundos
        setTimeout(() => {
          if (window.location.hostname !== 'localhost') {
            // En producción, ir directamente a la URL con parámetro
            window.location.href = `${window.location.origin}${import.meta.env.BASE_URL || '/'}?redirect=register`;
          } else {
            // En desarrollo, usar navigate
            navigate("/register");
          }
        }, 2000);
      }
    } catch (error) {
      toast.error("Error de conexión. Redirigiendo al registro...", {
        position: "top-right",
        autoClose: 3000,
      });
      
      // En caso de error, también redirigir al registro
      setTimeout(() => {
        if (window.location.hostname !== 'localhost') {
          window.location.href = `${window.location.origin}${import.meta.env.BASE_URL || '/'}?redirect=register`;
        } else {
          navigate("/register");
        }
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-100">
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <main className="max-w-md w-full space-y-8">
          <h1 className="text-center text-3xl font-extrabold text-gray-900">
            Iniciar Sesión
          </h1>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
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
                  // Simple redirección - en producción usar window.location
                  if (window.location.hostname !== 'localhost') {
                    window.location.href = `${window.location.origin}${import.meta.env.BASE_URL || '/'}?redirect=register`;
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
