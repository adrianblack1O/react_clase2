import React from 'react';
import { Link } from 'react-router-dom';
import logojuancho from '../assets/juancho.png';
import CartWidget from './CartWidget';

class NavBar extends React.Component {
    render() {
        return ( 
            <>
            <nav>
            <div className="nav-wrapper light-blue darken-3">
              <Link to="/" className="brand-logo hide-on-med-and-down light-blue darken-3"><img src={logojuancho} width="60" height="auto" alt="logo Juancho"/>TiendaJuancho</Link>
              <Link to="/" className="brand-logo light-blue darken-3"><img src={logojuancho} width="60" height="auto" alt="logo Juancho"/></Link>
              <a href="#sidenav" data-target="mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
              <ul id="nav-mobile" className="right hide-on-med-and-down light-blue darken-3">
                <li><Link to="/productos/Cuencos">Cuencos</Link></li>
                <li><Link to="/productos/Cubiertos">Cubiertos</Link></li>
                <li><Link to="/productos/Textil">Textil</Link></li>
                <li><a href="#about">Quienes somos?</a></li>
                <li><a href="#contacto">Contactenos</a></li>
                <li><Link to="/cart"><CartWidget /></Link></li>
              </ul>
            </div>
          </nav>

          <ul class="sidenav" id="mobile">
                <li className="sidenav-close"><Link to="/productos/Cuencos">Cuencos</Link></li>
                <li className="sidenav-close"><Link to="/productos/Cubiertos">Cubiertos</Link></li>
                <li className="sidenav-close"><Link to="/productos/Textil">Textil</Link></li>
                <li className="sidenav-close"><Link to="/"><i className="material-icons left">info_outline</i>Quienes somos?</Link></li>
                <li className="sidenav-close"><Link to="/"><i className="material-icons left">email</i>Contactenos</Link></li>
                <li className="sidenav-close"><Link to="/cart"><i className="material-icons left">shopping_cart</i>Carrito</Link></li>
        </ul>
        </>
        )
    }
}

export default NavBar;