import { useState } from "react";

const QRSearchByName = () => {
  const [product, setProduct] = useState("");

  const productURL = `https://tt-react.netlify.app/products/product/${product}`;
  const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(productURL)}`;

  return (
    <div className="p-4 max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-semibold">Buscar producto por nombre</h2>

      <input
        type="text"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        placeholder="Ingresá el nombre del producto"
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
      />

      {product && (
        <div className="mt-4 text-center space-y-2">
          <p className="text-sm text-gray-600 break-words">{productURL}</p>
          <img
            src={qrURL}
            alt={`QR para ${product}`}
            className="mx-auto w-48 h-48"
          />
        </div>
      )}
    </div>
  );
};

export default QRSearchByName;
