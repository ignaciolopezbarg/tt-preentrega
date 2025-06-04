import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://683f3f8b1cd60dca33dec719.mockapi.io/users";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        alert("Bienvenido " + (user.name || user.email));
        localStorage.setItem("user", JSON.stringify(user)); // guardar sesión
        navigate("/user");
      } else {
        alert("Usuario no encontrado. Redirigiendo al registro...");
        navigate("/register");
      }
    } catch (error) {
      console.error("Error en login:", error);
      alert("Error al iniciar sesión. Intenta más tarde.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Ingresar</button>
    </form>
  );
}

export default Login;

