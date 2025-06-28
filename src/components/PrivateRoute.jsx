import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children, allowedRoles }) => {
  const { user } = useContext(AuthContext);

  // Verificar si el usuario está autenticado
  if (!user) {
    return <Navigate to="/" />;
  }

  // Verificar si el usuario tiene un rol permitido
  if (allowedRoles && (!user.role || !allowedRoles.includes(user.role))) {
    return <Navigate to="/unauthorized" />;
  }

  // Renderizar los hijos si pasa todas las verificaciones
  return children;
};

export default PrivateRoute;
