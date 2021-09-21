import React from 'react';
import { Link } from 'react-router-dom';
import logojuancho from '../assets/juancho.png';
import CartWidget from './CartWidget';

class NavBar extends React.Component {
    render() {
        return ( 
            <>
            <div className="navbar-fixed valign-wrapper">
            <nav>
            <div className="nav-wrapper light-blue darken-3">
              <Link to="/" className="brand-logo light-blue darken-3"><img src={logojuancho} width="250" height="auto" alt="logo Juancho"/></Link>
              <Link to="/cart" href="#cart" data-target="none" className="sidenav-trigger right"><CartWidget /></Link>
              <a href="#sidenav" data-target="mobile" className="sidenav-trigger left"><i className="material-icons">menu</i></a>
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
          </div>

          <ul className="sidenav" id="mobile">
                <li className="sidenav-close"><Link to="/productos/Cuencos">Cuencos</Link></li>
                <li className="sidenav-close"><Link to="/productos/Cubiertos">Cubiertos</Link></li>
                <li className="sidenav-close"><Link to="/productos/Textil">Textil</Link></li>
                <li className="sidenav-close"><Link to="/"><i className="material-icons left">info_outline</i>Quienes somos?</Link></li>
                <li className="sidenav-close"><Link to="/"><i className="material-icons left">email</i>Contactenos</Link></li>
        </ul>
        </>
        )
    }
}

export default NavBar;