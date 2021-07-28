import React from 'react';
import 'materialize-css';
// import ReactDOM from 'react-dom';

class NavBar extends React.Component {
    render() {
        return ( 
            <nav>
            <div class="nav-wrapper light-blue darken-3">
              <a href="#home" class="brand-logo light-blue darken-3"><img src="images/juancho.png" width="60" height="auto" alt="logo Juancho"/>TiendaJuancho</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down light-blue darken-3">
                <li><a href="#home">Home</a></li>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#about">Quienes Somos?</a></li>
                <li><a href="#contacto">Contactenos</a></li>
                <li><a href="#carrito"><i class="material-icons">shopping_cart</i></a> </li>
              </ul>
            </div>
          </nav>
        )
    }
}

export default NavBar;