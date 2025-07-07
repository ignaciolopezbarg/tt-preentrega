import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children, allowedRoles }) => {
  const { user } = useContext(AuthContext);

  console.log("PrivateRoute - user:", user); // Debug
  console.log("PrivateRoute - allowedRoles:", allowedRoles); // Debug
  console.log("PrivateRoute - current location:", window.location.href); // Debug

  if (!user) {
    console.log("PrivateRoute - Sin usuario, redirigiendo a /login"); // Debug
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && (!user.role || !allowedRoles.includes(user.role))) {
    console.log("PrivateRoute - Usuario sin permisos, redirigiendo a /unauthorized"); // Debug
    return <Navigate to="/unauthorized" />;
  }

  console.log("PrivateRoute - Acceso concedido"); // Debug
  return children;

  console.log("PrivateRoute - Usuario autorizado, mostrando contenido"); // Debug
  return children;
};

export default PrivateRoute;
