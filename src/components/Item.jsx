import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from "../context/cartContext";

const Producto = function({id, produ, precio, stock, imagenURL}){

    const itemq = useContext(cartContext)
    const cartq = 1
    const item = produ

    return (
        <div className="container" key={id}>
          <div className="col">
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
                  <button className="black-text btn-flat grey lighten-3" onClick={()=> itemq.ItemAdd({id, stock, item, precio, cartq})}>+ agregar al carrito</button>
                    </div>     
                </div>
            </div>
        </div>
        </div>
        )
}

export default Producto;