import { React, useState, useEffect } from 'react'
import { allOrders } from '../fbase/firebase'

function Orders () {

	const [ order, setOrder ] = useState([])
	const [ cargando, setCargando ] = useState(true)
	
	useEffect(()=>{
		const items = allOrders()
		items.then((data) => {
		const itemsAux = []
		data.forEach(item => {
			itemsAux.push({ id:item.id,
                      cliente:item.data().cliente,
                      items:item.data().items,
                      fecha:item.data().fecha,
                      total:item.data().total
                    });
		})
    setOrder(itemsAux)
    setCargando(false)
  })
},[])

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
      <div className="container">
      {order.map(lastorder => {
      return(
      <div key={lastorder.id}> 
      <h4><i>La orden numero:</i> <b>{lastorder.id}</b> <i>fue realizada con exito!</i></h4>
          <div className="card">
          <table>
          <thead className="light-blue lighten-5">
              <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
              </tr>
          </thead>
          {lastorder.items.map(resumen => {
          return(
              <tbody key={resumen.id}>
                  <tr>
                  <td>{resumen.item}</td>
                  <td>{resumen.cantidad}</td>
                  </tr>
              </tbody>
              )
          })}
          </table>
          </div>
          <h2 className="right-align">Total: <i>${lastorder.total} </i></h2>
      </div>
      )
      })}
      </div>
    </div>
    </>
  )
}

export default Orders;