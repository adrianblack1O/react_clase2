import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from "../context/cartContext";

const Producto = function({id, produ, precio, stock, imagenURL}){

    const itemq = useContext(cartContext)
    const carrito = 1
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
                  <Link to="/cart"><button className="btn-flat" onClick={()=> itemq.ItemAdd({id, stock, item, precio, carrito})}>+ agregar al carrito</button></Link>
                    </div>     
                </div>
            </div>
        </div>
        </div>
        )
}

export default Producto;