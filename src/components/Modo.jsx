import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";  

function Modo() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col items-end space-y-2">
      <button
        type="button"
        onClick={() => toggleTheme()}
        className={`p-2 rounded-md ${
          theme === "light" ? "bg-yellow-400 text-white" : "bg-gray-800 text-white"
        }`}
      >
        {theme === "light" ? (
          <i className="material-icons">light_mode</i>
        ) : (
          <i className="material-icons">dark_mode</i>
        )}
      </button>
    </div>
  );
}

export default Modo;
