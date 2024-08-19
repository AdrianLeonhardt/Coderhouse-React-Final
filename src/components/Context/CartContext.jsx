import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Inicializa el estado del carrito con los datos almacenados en localStorage o con un array vacío si no hay datos.
  const [carrito, setCarrito] = useState(() => {
    const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
    return carritoStorage || [];
  });

  const agregarAlCarrito = (item, count) => {
    const itemAgregado = { ...item, quantity: count };
    const copiaCarrito = [...carrito];
    
    const itemIndex = copiaCarrito.findIndex((producto) => producto.id === itemAgregado.id);

    if (itemIndex !== -1) {
      copiaCarrito[itemIndex] = { 
        ...copiaCarrito[itemIndex], 
        quantity: copiaCarrito[itemIndex].quantity + count 
      };
      setCarrito(copiaCarrito);
    } else {
      setCarrito([...copiaCarrito, itemAgregado]);
    }
  };

  const numeritoCarrito = () => {
    return carrito.reduce((acumulador, producto) => acumulador + producto.quantity, 0);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, numeritoCarrito, vaciarCarrito }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
