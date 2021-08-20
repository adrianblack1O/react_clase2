import React from 'react';
import { Link } from 'react-router-dom';

const Producto = function({id, produ, precio, stock, imagenURL}){

    return (
        <div className="col s2" key={id}>
          <div className="card">
              <Link className="card-image center-align" to={`/productos/item/${id}`}>
                <img src={imagenURL} alt=""></img>
              </Link>
              <div className="valign-wrappwer center-align grey lighten-3">
                <div>
                  {produ}
                  </div>
                <div>
                  Precio: $ {precio}
                  </div>
                <div>
                  Stock: {stock} Unidades.
                  </div>
                  <div>
                    <a href="#addtocart">+ agregar al carrito</a>
                    </div>     
                </div>
            </div>
        </div>
        )
}

export default Producto;