import './App.css'
import ItemListContainer from './components/ItemList/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Brief from './components/Checkout/Brief'
import { CartProvider } from './components/Context/CartContext'
import FinalizarCompra from './components/Checkout/FinalizarCompra'

function App() {

  return (

    <CartProvider>

      <BrowserRouter>

        <Navbar/>

        <Routes>

          <Route path="/" element={<Home/>} />

          <Route path="/category/all" element={<ItemListContainer/>}/>

          <Route path="/category/:categoryId" element={<ItemListContainer/>} />

          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          
          <Route path="/carrito" element={<Brief/>} />

          <Route path="/finalizar-compra" element={<FinalizarCompra/>} />

        </Routes>

        
      </BrowserRouter>

    </CartProvider>
  );
}

export default App
