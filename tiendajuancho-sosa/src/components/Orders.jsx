import { React, useState, useEffect } from 'react'
import { allOrders } from '../fbase/firebase'

function Orders () {

	const [ orders, setOrders ] = useState([])
	const [ cargando, setCargando ] = useState(true)
	
	useEffect(()=>{
		const items = allOrders()
		items.then((data) => {
		const itemsAux = []
		data.forEach(item => {
			itemsAux.push({ id:item.id,
                      cliente:item.data().cliente,
                      fecha:item.data().fecha
                    });
		})
    setOrders(itemsAux)
    setCargando(false)
  })
},[])
console.log(orders)

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
      {/* <div className="valign-wrappwer left-align">
          {!catego && cargando===false &&
          <h4><i>Listado de productos:</i></h4>
          }
          {catego && cargando===false &&
          <h4><i>Listado de productos: {catego}</i></h4>
          }
        </div> */}
      {/* <div>
					{orders.map(producto => 
								<Producto key={producto.id}
								id={producto.id}
								produ={producto.produ}
								precio={producto.precio}
								imagenURL={producto.imagenURL}
								stock={producto.stock}
								/>)}
				</div> */}
    </div>
    </>
  )
}

export default Orders;