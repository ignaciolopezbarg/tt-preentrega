import React from "react";
import Footer from "../components/Footer";

function FAQ() {
  return (
    <>
      <main>
        <h1 className="text-3xl font-bold text-center my-8 ">Preguntas Frecuentes</h1>
        <div className="max-w-2xl mx-auto space-y-4 px-4">
          <p className="text-lg text-semibold mb-6">
            Aquí puedes encontrar respuestas a las preguntas más frecuentes sobre nuestros productos y servicios.
          </p>
          <details className="border rounded-lg p-4 bg-white shadow">
            <summary className="font-semibold cursor-pointer text-blue-800">Tienen un lugar fisico para ver los productos</summary>
            <span className="block mt-2 text-gray-700">
              Si! podes venir y elegir tus frutas y verduras, y recibir en el local el asesoramiento de nuestros expertos
            </span>
          </details>
          <details className="border rounded-lg p-4 bg-white shadow">
            <summary className="font-semibold cursor-pointer text-blue-800">Cual es el horario de atencion en el local</summary>
            <p className="mt-2 text-gray-700">
              Lunes a Viernes de 7.30 a 21 hs. Sabado de 8 a 13 hs. Domingo cerrado.
            </p>
          </details>
          <details className="border rounded-lg p-4 bg-white shadow">
            <summary className="font-semibold cursor-pointer text-blue-800">El envio a domicilio tiene costo adicional?</summary>
            <p className="mt-2 text-gray-700">
              Si! Dependiendo de la zona, el costo del envio puede variar. Al realizar la compra se te informara el costo del envio. Es importante que tengas en cuenta los descuentos que ofrecemos de acuerdo al zona y al dia de la semana. La info la encontraras en la pagina en la pestaña Descuentos.
            </p>
          </details>
          <details className="border rounded-lg p-4 bg-white shadow">
            <summary className="font-semibold cursor-pointer text-blue-800">Envian los productos al interior del pais?</summary>
            <p className="mt-2 text-gray-700">
              Llevamos los productos hasta los distintos correos y los costos de envio son por cuenta del comprador.
            </p>
          </details>
          <details className="border rounded-lg p-4 bg-white shadow">
            <summary className="font-semibold cursor-pointer text-blue-800">Tienen lugar para estacionamiento vehicular?</summary>
            <p className="mt-2 text-gray-700">
              Si! Para todos nuestros clientes disponemos de un espacio para poder estacionar su vehiculo
            </p>
          </details>
          <details className="border rounded-lg p-4 bg-white shadow">
            <summary className="font-semibold cursor-pointer text-blue-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tenetur velit perspiciatis ratione mollitia iure, dolores esse nostrum excepturi inventore voluptatem quibusdam ducimus repellendus, consequuntur recusandae nulla? Perferendis, quisquam assumenda!</summary>
            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dicta vitae beatae officiis dignissimos doloribus corporis commodi. Quas fuga nesciunt, sit quam rem voluptatibus exercitationem, dolore sapiente aliquam cumque sunt.
            </p>
          </details>
          <details className="border rounded-lg p-4 bg-white shadow">
            <summary className="font-semibold cursor-pointer text-blue-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aspernatur sed earum laudantium odit reprehenderit, dicta iusto vero, inventore libero cumque ipsum nihil consequatur molestiae asperiores ex iste delectus deleniti.</summary>
            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laudantium dicta dignissimos expedita ipsa consequatur. Repellendus, nostrum! Saepe recusandae incidunt debitis aliquam explicabo nihil est quaerat delectus. Aperiam, molestias tenetur.
            </p>
          </details>
          <details className="border rounded-lg p-4 bg-white shadow">
            <summary className="font-semibold cursor-pointer text-blue-800">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, minima.
            </summary>
            <p className="mt-2 text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi incidunt saepe aliquam. Molestiae natus sed dolor atque, itaque possimus reprehenderit.
            </p>
          </details>
          <details className="border rounded-lg p-4 bg-white shadow">
            <summary className="font-semibold cursor-pointer text-blue-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eos iste laborum officiis porro cumque, esse aut illum suscipit reiciendis.
            </summary>
            <p className="mt-2 text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi incidunt saepe aliquam. Molestiae natus sed dolor atque, itaque possimus reprehenderit.
            </p>
          </details>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default FAQ;
