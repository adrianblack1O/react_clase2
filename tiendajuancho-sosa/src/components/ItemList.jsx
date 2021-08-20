import { React, useState, useEffect } from 'react';
import { productos } from './Datos'
import Producto from './Item'

function Categorias ({catego}) {

  const [products, setProducts] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const traeProductos = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let produF = productos.filter(producto => (producto.categoria === catego))
          if (produF.length !== 0) 
          resolve (produF)
          else
          resolve (productos)
        }, 1000);
      });
    }

traigoProductos()
async function traigoProductos () {
	const trajeProductos = await traeProductos();
  setProducts(trajeProductos)
  setCargando(false)
}
},[catego])
  return (
    <>
    {cargando===true &&
    <div className="white-text">Cargando</div>
    }
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
      <div className="valign-wrappwer left-align">
          {cargando===false &&
          <h3>Listado de productos</h3>
          }
        </div>
      <div>
					{products.map(producto => 
								<Producto key={producto.id}
								id={producto.id}
								produ={producto.produ}
								precio={producto.precio}
								imagenURL={producto.imagenURL}
								stock={producto.stock}
								/>)}
				</div>
    </div>
    </>
  )
}

export default Categorias;