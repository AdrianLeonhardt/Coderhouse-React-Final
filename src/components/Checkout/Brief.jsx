import React, { useContext } from 'react';
import CartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';

const Brief = () => {
  const { carrito, vaciarCarrito } = useContext(CartContext);

  const totalPrecio = carrito.reduce((acumulador, producto) => {
    return acumulador + (producto.precio * producto.quantity);
  }, 0);

  return (
    <div className='carrito-detail'>
      <h1 className='detalle-carrito'>Detalle de Compra</h1>

      {carrito.length > 0 ? (
        <>
          {carrito.map((producto) => (
            <div key={producto.id} className="producto">
              <h2>{producto.nombre}</h2>
              <h3>{producto.descripcion}</h3>
              <h3>Precio unitario: ${producto.precio}</h3>
              <h3>Cantidad: {producto.quantity}</h3>
              <h3>Precio total: ${producto.precio * producto.quantity}</h3>
            </div>
          ))}

          <h2 className='total-carrito'>Total del Carrito: ${totalPrecio.toFixed(2)}</h2>

          <button onClick={vaciarCarrito} className="btn-vaciar-carrito">
            Vaciar Carrito
          </button>

          <Link to="/finalizar-compra" style={{ textDecoration: 'none' }}>
          <button className='btn-finalizar-compra'>Finalizar Compra</button></Link>

        </>
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
};

export default Brief;
