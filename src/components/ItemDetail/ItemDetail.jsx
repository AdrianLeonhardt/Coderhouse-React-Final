import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useContext, useState } from 'react';
import CartContext from '../Context/CartContext';


const ItemDetail = ( {item} ) => {

  const {carrito, agregarAlCarrito} = useContext(CartContext);
  //console.log(carrito); // Vemos en consola lo que se guarda en el carrito


  const [count, setCount] = useState(1); // Estado para almacenar la cantidad de ítems

  const increment = () => {
    if (count < item.stock) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  
  
  
  return (
    <div className="item-detail">
        <h2>Detalle del Producto</h2>
        <h3>{item.nombre}</h3>
        <img src={item.imagen}/>
        <p>{item.descripcion}</p>
        <br />
        <h2>${item.precio}</h2>

        
        <br />
  
        <ItemCount 
        count ={count} 
        increment ={increment} 
        decrement ={decrement} 
        addItemButton={() => {agregarAlCarrito(item, count)}} 
        />

        <br />
        <Link to="/" className="back-button">
        Volver
        </Link>

    </div>
  )
 
}
export default ItemDetail