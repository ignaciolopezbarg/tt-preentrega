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
      navigate(user.role === "admin" ? "/admin-panel" : "/user");
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
      if (!response.ok) throw new Error("Error al obtener usuarios.");

      const users = await response.json();

      const foundUser = users.find(
        (u) => u.email === email && u.password === password
      );

      if (foundUser) {
        toast.success("Bienvenido " + (foundUser.name || foundUser.email));
        login(foundUser);
        navigate(foundUser.role === "admin" ? "/admin-panel" : "/user");
      } else {
        toast.error("Usuario no encontrado. Redirigiendo al registro...");
        navigate("/register");
      }
    } catch (error) {
      console.error("Error en login:", error);
      toast.error("Error al iniciar sesión. Intenta más tarde.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-100">
      <main className="flex-grow flex items-center justify-center">
        <form
          autoComplete="off"
          onSubmit={handleLogin}
          className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Iniciar sesión</h2>

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
                navigate("/register");
              }}
            >
              Registrate acá
            </span>
          </p>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Login;