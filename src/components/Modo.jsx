import React, { useState, useEffect } from "react";

function Modo() {
  const [modo, setModo] = useState("light"); 

  useEffect(() => {
    document.body.style.backgroundColor = modo === "light" ? "white" : "black";
    document.body.style.color = modo === "light" ? "black" : "white";
  }, [modo]);

  return (
    <div className="flex flex-col items-end space-y-2">
      <button
        type="button"
        onClick={() => setModo("light")}
        className="bg-yellow-400 text-white p-2 rounded-md"
      >
        <i className="material-icons">light_mode</i>
      </button>
      <button
        type="button"
        onClick={() => setModo("dark")}
        className="bg-gray-800 text-white p-2 rounded-md"
      >
        <i className="material-icons">dark_mode</i>
      </button>
    </div>
  );
}

export default Modo;