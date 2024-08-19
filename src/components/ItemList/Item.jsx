import React from 'react'
import "../../App.css"
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div className='card'>
        <img src={producto.imagen}/>
        <h2>{producto.nombre}</h2>
        <p>{producto.categoria}</p>
        <h2>${producto.precio}</h2>
        <Link className= 'button' to={`/item/${producto.id}`}>Ver mas</Link>
    </div>
  )
}

export default Item