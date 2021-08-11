import { productos } from './Datos'
import { React, useState, useEffect } from 'react';

function ListaProductos () {

  const [products, setProducts] = useState([])
  const [cargando, setCargando] = useState(true)

useEffect(() => {
const traeProductos = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(productos);
		}, 2000);
	});
}

traigoProductos()
async function traigoProductos () {
	const trajeProductos = await traeProductos();
  setProducts(trajeProductos)
  setCargando(false)
}
},[])

  return (
    <div className="row center-align">
      {cargando===true &&
        <div className="preloader-wrapper small active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      }
      {products.map(producto => {
        return (
          <div className="col s2" key={producto.id}>
            <div className="card">
                <div className="card-image center-align">
                  <img src={producto.imagenURL} alt=""></img>
                </div>
                <div className="valign-wrappwer center-align grey lighten-4">
                  <div>
                    {producto.produ}
                    </div>
                  <div>
                    Precio: $ {producto.precio}
                    </div>
                  <div>
                    Stock: {producto.stock} Unidades.
                    </div>
                 </div>
            <div>
              <a href="#addtocart">+ agregar al carrito</a>
              </div>        
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ListaProductos;