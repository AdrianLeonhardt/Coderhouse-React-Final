import { useContext } from "react"
import {MdOutlineShoppingCart} from "react-icons/md"
import CartContext from "../Context/CartContext"
import { Link } from "react-router-dom"

function CartWidget() {
  
  const { numeritoCarrito} = useContext(CartContext);
  
  return (
    <div className="carrito">

      <Link className="navbar-items" to = "/carrito"><MdOutlineShoppingCart size="25px"/></Link>
      <span className="numerito"> {numeritoCarrito()} </span>
    </div>
  )
}

export default CartWidget