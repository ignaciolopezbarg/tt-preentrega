import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("user");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !gender || !role) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const newUser = {
      name,
      email,
      password,
      gender,
      role
    };

    try {
      const response = await fetch(
        "https://683f3f8b1cd60dca33dec719.mockapi.io/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );

      if (!response.ok) {
        throw new Error("Error al crear usuario");
      }

      const createdUser = await response.json();
      console.log("Usuario creado:", createdUser);

      alert("Usuario registrado con éxito");
      navigate("/"); // Redirige al login
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Error al crear el usuario. Intenta más tarde.");
    }
  };

  return (
    <div className="form-container">
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Correo:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Género:</label>
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Rol:</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>

        <button type="submit">Registrarse</button>
      </form>

      <p>
        ¿Ya tienes una cuenta?{" "}
        <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/")}>
          Inicia sesión
        </span>
      </p>
    </div>
  );
};

export default Register;

