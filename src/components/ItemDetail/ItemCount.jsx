import React, { useState } from "react";

// Traemos del ItemDetail la cantidad de stock
function ItemCount({count, increment, decrement, addItemButton}) {
  
  return (
    <div className="item-count">
      <div className="item-count-controls">
        <button className="btn-decrementar" onClick={decrement}>-</button>
        <h2>{count}</h2>
        <button className="btn-incrementar" onClick={increment}>+</button>
      </div>
      <button className="btn-agregar-carrito" onClick={addItemButton}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount
