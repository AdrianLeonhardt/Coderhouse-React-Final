# Curso React - Coderhouse

## Descripción

Esta rama contiene la actividad final del curso de React con Vite. El proyecto es una tienda online ficticia, diseñada para demostrar el uso de varias tecnologías y conceptos aprendidos durante el curso.

## Tecnologías Usadas

- **HTML**: Estructuración del contenido.
- **CSS**: Estilo y diseño de la aplicación.
- **JavaScript (JS)**: Lógica del lado del cliente.
- **React**: Biblioteca para construir interfaces de usuario.

## Proyecto

El proyecto consiste en una tienda online en la que los usuarios pueden explorar y comprar diferentes tipos de ropa ficticia. La aplicación permite a los usuarios ver productos, añadirlos al carrito y simular una compra.

## Gif del proceso de compra



## Características

- **React Router DOM**: Manejo de navegación entre diferentes vistas de la tienda.

- **Hooks de React utilizados**:
  - `useEffect`: Para manejar efectos secundarios como la obtención de datos y la sincronización del estado.
  - `useParams`: Para extraer parámetros de la URL, como la categoría de productos.
  - `useState`: Para gestionar el estado local del componente.
  - `useReducer`: Para manejar el estado complejo de la aplicación, como el carrito de compras.

- **Firebase**:
  - Utilizado como **base de datos** para almacenar la información de los productos y de los usuarios ficticios.
  - Permite gestionar el almacenamiento en la nube y realizar operaciones de lectura y escritura en la base de datos en tiempo real.

- **LocalStorage**:
  - Se implemento localstorage, para asegurar que los datos del carrito de compras se mantengan almacenados incluso después de cerrar el navegador. Esto permite a los usuarios continuar su compra en sesiones futuras sin perder los artículos añadidos al carrito.

  ## Uso

- **1**: Clonar el repositorio `git clone 'xxx'`.
- **2**: Instalar node_modules `npm install`.
- **3**: Iniciar la app desde la terminal `npm run dev`.
- **4**: Disfrutar el proyecto en el localhost del navegador.