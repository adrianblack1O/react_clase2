import React from 'react';
import { Link } from 'react-router-dom';
import ProduDrop from './ProductoDrop';
import logojuancho from '../assets/juancho.png';
import CartWidget from './CartWidget';

class NavBar extends React.Component {
    render() {
        return ( 
            <nav>
            <div className="nav-wrapper light-blue darken-3">
              <Link to="/" className="brand-logo light-blue darken-3"><img src={logojuancho} width="60" height="auto" alt="logo Juancho"/>TiendaJuancho</Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down light-blue darken-3">
                <li><ProduDrop /></li>
                <li><a href="#about">QUIENES SOMOS?</a></li>
                <li><a href="#contacto">CONTACTENOS</a></li>
                <li><Link to="cart"><CartWidget /></Link></li>
              </ul>
            </div>
          </nav>
        )
    }
}

export default NavBar;