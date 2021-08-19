import { productos } from './Datos'
import { React, useState, useEffect } from 'react';
import 'materialize-css';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

function ProduDetail ({produid}) {
  //console.log(produid)

  const [products, setProducts] = useState([])
  const [cargando, setCargando] = useState(true)

useEffect(() => {
    const traeProductos = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let produF = productos.find(producto => (producto.id === produid))
          resolve ([produF])
        }, 1000);
      });
    }

traigoProductos()
async function traigoProductos () {
	const trajeProductos = await traeProductos();
  setProducts(trajeProductos)
  setCargando(false)

}
},[produid])
  return<>
    {cargando===true &&
    <div className="white-text">Cargando</div>
    }
    {cargando===false &&
    <Link to="/productos"> &lt; Volver</Link>
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
      {products.map(producto => {
        return (          
          <div className="col s12 m7 left-align" key={producto.id}>
          <h2 className="header">{producto.produ}</h2>
            <div className="card-image">
              <img src={producto.imagenURL} alt=""></img>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>{producto.descripcion}</p>
              </div>
              <div>
                  <ItemCount stock={producto.stock}/>
                  </div>
              <div>
                <a className="light-blue-text text-darken-1" href="#addtocart">+ agregar al carrito</a>
              </div>
            </div>
        </div>
        )
      })}
    </div>
  </>
}

export default ProduDetail;