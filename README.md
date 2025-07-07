# React + Vite

Ecommerce Frutas y Verduras
Proyecto realizado para el curso Talento Tech - React con Vite.
Este repositorio contiene un ecommerce simple para la venta de frutas y verduras.

🚀 Tecnologías utilizadas
- React
- Context API
- Vite
- JavaScript
- CSS
- HTML
- Tailwind CSS
- date-fns
- Toastify
- SweetAlert2
- Lucide React (íconos)
- MockAPI (para persistencia de datos)
- Framer Motion (animaciones)
- React Router DOM

🛒 Descripción
Aplicación web de ecommerce que permite a los usuarios navegar, seleccionar y comprar frutas y verduras frescas. Incluye funcionalidades básicas de carrito de compras y gestión de productos.

**Características principales:**
- Permite dividir el tipo de persona que accede en dos categorías: usuario y administrador
- **Usuario**: puede realizar compras, accediendo al panel de ofertas de acuerdo a la zona de residencia y el día de la semana
- **Administrador**: permite agregar productos, editarlos y borrarlos
- **Sistema de valoración**: Los usuarios pueden valorar su experiencia con íconos interactivos (Disconforme, Conforme, Muy Satisfecho) que se guardan en MockAPI
- **Responsive Design**: Adaptado para móviles, tablets y desktop
- La aplicación se puede acceder en modo desarrollo desde localhost o en producción desde GitHub Pages

**APIs utilizadas:**
- MockAPI para productos: https://6814d2a7225ff1af162a3ac3.mockapi.io/ecommerce
- MockAPI para usuarios: https://683f3f8b1cd60dca33dec719.mockapi.io/users  
- MockAPI para likes: https://686be2ca14219674dcc67d83.mockapi.io/likes

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
1. Accede a la aplicación en tu navegador en http://localhost:5173 (o el puerto que indique Vite)
2. También puedes acceder en producción: https://ignaciolopezbarg.github.io/tt-preentrega
3. Navega por el catálogo de productos
4. Agrega productos al carrito y finaliza la compra
5. Si eres admin, podrás agregar, editar y eliminar productos
6. **Nuevo**: Al finalizar una compra, valora tu experiencia con los íconos de satisfacción

**Acceso al sistema:**
El acceso es siempre con Login. Si no estás registrado, te deriva al Registro, quedando todo almacenado en MockAPI.

<p align = "center" >
<img src="public/images/Login.png" width= "200" alt="pantalla del login">
 <img src="public/images/Usuario.png" width= "200"  alt="pantalla del usuario">
 <img src="public/images/PanelAdmin.png" width= "200" alt="pantalla del admin">
 </p>
📁 Estructura del Proyecto

**Usuarios de prueba:**
- **Usuario regular**: 
  - Email: mar@sic.com
  - Password: pass123
- **Administrador**: 
  - Email: rio@gma.com  
  - Password: pass123

```
tt-preentrega/
├── public/
│   ├── 404.html
│   ├── loading.gif
│   ├── logo.jpeg
│   ├── data/
│   │   └── products.json
│   └── images/
└── src/
    ├── .gitignore
    ├── App.css
    ├── App.jsx
    ├── Context/
    │   ├── AuthContext.jsx
    │   ├── CartContext.jsx
    │   └── ThemeContext.jsx
    ├── OutofPath/
    ├── components/
    │   ├── Cart.jsx
    │   ├── ContadorLikes.jsx
    │   ├── Footer.jsx
    │   ├── FormularioProducto.jsx
    │   ├── Header.jsx
    │   ├── LogoutButton.jsx
    │   ├── Modo.jsx
    │   ├── PrivateRoute.jsx
    │   └── ProductList.jsx
    ├── date-fns.txt
    ├── eslintconfig.js
    ├── index.css
    ├── index.html
    ├── main.jsx
    ├── package-lock.json
    ├── package.json
    ├── pages/
    │   ├── AboutUs.jsx
    │   ├── AdminPanel.jsx
    │   ├── Auth/
    │   │   ├── Login.jsx
    │   │   └── Register.jsx
    │   ├── Checkout.jsx
    │   ├── Faq.jsx
    │   ├── FechaDescuento.jsx
    │   ├── Home.jsx
    │   ├── NotFound.jsx
    │   └── ProductDetail.jsx
    ├── postcss.config.js
    ├── README.md
    ├── styles/
    │   └── cart.css
    ├── tailwind.config.js
    └── viteconfig.js


```

👤 Autor
Ignacio Lopez Barg
📝 Licencia
Este proyecto está bajo la licencia MIT.
