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
      console.log("Intentando login con:", email); // Debug
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Error al obtener usuarios.");

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
        
        // Usar navegación normal de React Router
        setTimeout(() => {
          console.log("Navegando a /register"); // Debug
          navigate("/register");
        }, 1500);
      }
    } catch (error) {
      console.error("Error en login:", error);
      toast.error("Error al iniciar sesión. Intenta más tarde.");
      
      // En caso de error de conexión, también redirigir al registro
      setTimeout(() => {
        console.log("Error - navegando a /register"); // Debug
        navigate("/register");
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

export default Login;