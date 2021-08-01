import React from 'react';
import 'materialize-css';
import CartWidget from './CartWidget';
// import ReactDOM from 'react-dom';

class NavBar extends React.Component {
    render() {
        return ( 
            <nav>
            <div className="nav-wrapper light-blue darken-3">
              <a href="#home" className="brand-logo light-blue darken-3"><img src="images/juancho.png" width="60" height="auto" alt="logo Juancho"/>TiendaJuancho</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down light-blue darken-3">
                <li><a href="#home">Home</a></li>
                <li><a href="#productos">Productos</a></li>
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