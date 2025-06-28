import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Footer from "../../components/Footer";

const Register = ({ cart, quitarDelCarrito }) => {
  const navigate = useNavigate();
  const { login, justLoggedOut, setJustLoggedOut } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("user");

  // Limpiar los campos si se acaba de hacer logout o al entrar a la página
  useEffect(() => {
    setName("");
    setEmail("");
    setPassword("");
    setGender("");
    setRole("user");
    if (justLoggedOut) setJustLoggedOut(false);
  }, [justLoggedOut, setJustLoggedOut]);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !gender || !role) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const newUser = { name, email, password, gender, role };

    try {
      const response = await fetch(
        "https://683f3f8b1cd60dca33dec719.mockapi.io/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        }
      );

      if (!response.ok) throw new Error("Error al crear usuario");

      const createdUser = await response.json();
      alert("Usuario registrado con éxito");

      login(createdUser);

      if (createdUser.role === "admin") {
        navigate("/admin-panel");
      } else {
        navigate("/user");
      }
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Error al crear el usuario. Intenta más tarde.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-100">
      <form
      autoComplete="off"
        onSubmit={handleRegister}
        className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Registro</h2>

        <input
          type="text"
            name="register-name"
    autoComplete="off"
          placeholder="Nombre"
          value={name}
          minLength={3}
          maxLength={18}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="register-email"
    autoComplete="username"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
           name="register-password"
    autoComplete="new-password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full mb-6 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Selecciona género</option>
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          <option value="other">Otro</option>
        </select>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full mb-6 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="user">Usuario</option>
          <option value="admin">Administrador</option>
        </select>

        <div className="flex justify-between">
          <button
            type="reset"
            onClick={() => {
              setName("");
              setEmail("");
              setPassword("");
              setGender("");
              setRole("user");
            }}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
          >
            Limpiar
          </button>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
          >
            Registrarse
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Register;