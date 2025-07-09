import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../../components/Footer";
import { AuthContext } from "../../context/AuthContext";
const API_URL = "https://683f3f8b1cd60dca33dec719.mockapi.io/users";

function LoginComponent() {
  const navigate = useNavigate();
  const { user, login, logout } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!user) {
      setEmail("");
      setPassword("");
    }
  }, []);

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
      if (!response.ok) throw new Error("Error de conexión");

      const users = await response.json();
      const foundUser = users.find(
        (u) =>
          u.email.trim().toLowerCase() === email.trim().toLowerCase() &&
          u.password === password
      );

      if (foundUser) {
        login(foundUser);
        toast.success(`¡Bienvenido, ${foundUser.name}!`);
      } else {
        toast.error("Email o contraseña incorrectos");
        setTimeout(() => {
          navigate("/register");
        }, 2000);
      }
    } catch (error) {
      toast.error("Error de conexión. Inténtalo de nuevo.");
      setTimeout(() => {
        navigate("/register");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-100">
      <div></div>
      <div className="flex items-center justify-center">
        <main className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Iniciar Sesión
          </h1>
          <form onSubmit={handleLogin}>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
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
                onClick={(e) => {
                  e.preventDefault();
                  logout();
                  navigate("/register");
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

export default LoginComponent;