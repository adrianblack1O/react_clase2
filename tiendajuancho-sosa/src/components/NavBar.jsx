import React from 'react';
import CartWidget from './CartWidget';
import logojuancho from '../assets/juancho.png';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return ( 
            <nav>
            <div className="nav-wrapper light-blue darken-3">
              <Link to="/" className="brand-logo light-blue darken-3"><img src={logojuancho} width="60" height="auto" alt="logo Juancho"/>TiendaJuancho</Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down light-blue darken-3">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><a href="#about">Quienes Somos?</a></li>
                <li><a href="#contacto">Contactenos</a></li>
                <CartWidget />
              </ul>
            </div>
          </nav>
        )
    }
}

export default NavBar;