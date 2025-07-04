# React + Vite

Ecommerce Frutas y Verduras
Proyecto realizado para el curso Talento Tech - React con Vite.
Este repositorio contiene un ecommerce simple para la venta de frutas y verduras.

🚀 Tecnologías utilizadas
React
Context API
Vite
JavaScript
CSS
HTML
Tailwind CSS
date-fns
Toastify
SweetAlert

🛒 Descripción
Aplicación web de ecommerce que permite a los usuarios navegar, seleccionar y comprar frutas y verduras frescas. Incluye funcionalidades básicas de carrito de compras y gestión de productos.
Permite ademas dividir el tipo de persona que accede en dos categorias, usuario, donde puede realizar compras, accediendo al panel de ofertas de acuerdo a la zona de residencia y el dia de la semana. La otra categoria de persona es la de administrador, que permite que se puedan agregar productos, editarlos y borrarlos.
A la aplicacion de puede acceder en el modo de desarrollo desde la terminal, con el localhost, o en modo produccion desde la url de GitHub-pages.

⚙️ Instalación
Clona el repositorio:
bash

git clone https://github.com/ignaciolopezbarg/tt-preentrega.git
Ingresa a la carpeta del proyecto:
bash
cd tt-preentrega
Instala las dependencias:
bash
npm install
Inicia la aplicación:
bash
npm run dev
💻 Uso
Accede a la aplicación en tu navegador en http://localhost:5173 (o el puerto que indique Vite).
Tambien puedes acceder, con https://ignaciolopezbarg.github.io/tt-preentrega, que es el deploy hecho con GitHub-pages.
Navega por el catálogo de productos.
Agrega productos al carrito y finaliza la compra.
Si eres admin, podras agregar, editar y eliminar productos.
Tanto los productos, como el tipo de usuarios, estan alojados en dos bases de mockapi, siendo las mismas
 https://6814d2a7225ff1af162a3ac3.mockapi.io/ecommerce para los productos
https://683f3f8b1cd60dca33dec719.mockapi.io/users    para los usuarios

<!-- 
Posibles causas por las que un producto no se puede editar ni eliminar:
- El producto no tiene un campo `id` válido (MockAPI requiere un `id` único para cada recurso).
- El campo `id` puede estar vacío, ser null, o tener un valor duplicado.
- El producto puede tener propiedades inconsistentes (por ejemplo, solo `name` y no `product`).
- El producto puede haber sido eliminado en MockAPI pero sigue en el estado local.
Solución: 
- Verifica en MockAPI que el producto tenga un campo `id` único y válido.
- Si falta el campo `id`, edítalo o elimínalo directamente desde la interfaz de MockAPI.
- Si el producto tiene solo `name`, edítalo para que tenga también `product`.
-->
# ...existing code...
````markdown
# React + Vite

Ecommerce Frutas y Verduras
Proyecto realizado para el curso Talento Tech - React con Vite.
Este repositorio contiene un ecommerce simple para la venta de frutas y verduras.

🚀 Tecnologías utilizadas
React
Context API
Vite
JavaScript
CSS
HTML
Tailwind CSS
date-fns
Toastify
SweetAlert

🛒 Descripción
Aplicación web de ecommerce que permite a los usuarios navegar, seleccionar y comprar frutas y verduras frescas. Incluye funcionalidades básicas de carrito de compras y gestión de productos.
Permite ademas dividir el tipo de persona que accede en dos categorias, usuario, donde puede realizar compras, accediendo al panel de ofertas de acuerdo a la zona de residencia y el dia de la semana. La otra categoria de persona es la de administrador, que permite que se puedan agregar productos, editarlos y borrarlos.
A la aplicacion de puede acceder en el modo de desarrollo desde la terminal, con el localhost, o en modo produccion desde la url de GitHub-pages.

⚙️ Instalación
Clona el repositorio:
bash

git clone https://github.com/ignaciolopezbarg/tt-preentrega.git
Ingresa a la carpeta del proyecto:
bash
cd tt-preentrega
Instala las dependencias:
bash
npm install
Inicia la aplicación:
bash
npm run dev
💻 Uso
Accede a la aplicación en tu navegador en http://localhost:5173 (o el puerto que indique Vite).
Tambien puedes acceder, con https://ignaciolopezbarg.github.io/tt-preentrega, que es el deploy hecho con GitHub-pages.
Navega por el catálogo de productos.
Agrega productos al carrito y finaliza la compra.
Si eres admin, podras agregar, editar y eliminar productos.
Tanto los productos, como el tipo de usuarios, estan alojados en dos bases de mockapi, siendo las mismas
 https://6814d2a7225ff1af162a3ac3.mockapi.io/ecommerce para los productos
https://683f3f8b1cd60dca33dec719.mockapi.io/users    para los usuarios

<!-- 
Posibles causas por las que un producto no se puede editar ni eliminar:
- El producto no tiene un campo `id` válido (MockAPI requiere un `id` único para cada recurso).
- El campo `id` puede estar vacío, ser null, o tener un valor duplicado.
- El producto puede tener propiedades inconsistentes (por ejemplo, solo `name` y no `product`).
- El producto puede haber sido eliminado en MockAPI pero sigue en el estado local.
Solución: 
- Verifica en MockAPI que el producto tenga un campo `id` único y válido.
- Si falta el campo `id`, edítalo o elimínalo directamente desde la interfaz de MockAPI.
- Si el producto tiene solo `name`, edítalo para que tenga también `product`.
-->
# ...existing code...
