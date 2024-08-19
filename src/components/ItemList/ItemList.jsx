import Item from "./Item";
import "../../App.css"

function ItemList({productos}) {
    
  return (
    <div className= 'container-productos'>
        {productos.map((prod)=> <Item producto = {prod} key= {prod.id} />)}
    </div>
  )
}

export default ItemList