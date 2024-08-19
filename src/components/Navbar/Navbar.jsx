import CartWidget from "./CartWidget"
import "../../App.css"
import { Link } from "react-router-dom"

function Navbar() {
    return (
      <nav className="navbar">
          <div>
                <Link to="/">
                    <img className="logo" src="img/logo.png" alt="Logo de Moldes Digitales" />
                </Link>
            </div>
          <ul className="navbar-links">
              <li><Link className="navbar-items" to = "/">Inicio</Link></li>
              <li><Link className="navbar-items" to = "/category/all">Productos</Link></li>
              <li><Link className="navbar-items" to = "/category/pantalones">Pantalones</Link></li>
              <li><Link className="navbar-items" to = "/category/shorts">Shorts</Link></li>
              <li><Link className="navbar-items" to = "/category/camisas">Camisas</Link></li>
              <li><CartWidget/></li>
          </ul>
        
          
      </nav>
    )
  }
  
  export default Navbar