import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { itemSolo } from '../fbase/firebase';
import ItemCount from './ItemCount';


function ProduDetail ({produid}) {

  const [products, setProducts] = useState([])
  const [cargando, setCargando] = useState(true)

useEffect(() => {
      const item = itemSolo(produid)
      item.then((data) => {
        setProducts(data.data())
        setCargando(false)
     })
    },[produid])
    
  return<>
    {cargando===false &&
    <Link to="/"> &lt; Volver</Link>
    }
    <div className="row center-align">
            {cargando===true &&
            <div className="row center-align"  style={{ margin: '1% auto' }}>
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
            </div>
            }
      {[products].map(producto => {
        return (          
          <div className="col s12 m7 left-align" key={produid}>
          <h2 className="header">{producto.produ}</h2>
            <div className="col card-image">
              <img src={producto.imagenURL} alt=""></img>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>{producto.descripcion}</p>
              </div>
              {cargando===false &&
              <div className="center-align">
                  <ItemCount id={produid} item={producto.produ} precio={producto.precio} stock={producto.stock}/>
                  </div>}
            </div>
        </div>
        )
      })}
    </div>
  </>
}

export default ProduDetail;