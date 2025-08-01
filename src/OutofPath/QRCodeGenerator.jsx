import { useState } from "react";

const QRCodeGenerator = () => {
  const [category, setCategory] = useState("frutas");

  const baseURL = "https://tt-react.netlify.app/products/category/";
  const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    baseURL + category
  )}`;

  return (
    <div>
      <section>
        <span>Queres buscar productos por categoria</span>
        <p>
          Escanea el siguiente codigo y elegi que categoria queres visualizar
        </p>
      </section>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="frutas">Frutas</option>
        <option value="verduras">Verduras</option>
        <option value="citricos">Cítricos</option>
      </select>

      <div>
        <img src={qrURL} alt="QR Code" style={{ width: 200, height: 200 }} />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
