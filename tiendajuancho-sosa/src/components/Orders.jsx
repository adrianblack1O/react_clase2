
import React, { useState, useEffect, useContext } from "react";
import { cartContext } from "../context/cartContext";
import { orderSolo } from "../fbase/firebase";

function Orders () { 

        const cartview = useContext(cartContext)
        const orderid = cartview.order
        // ESTA PARTE ES PARA MIRAR!
        //const orderid = '9FHa1n5OtLHToBPDlsWu'

        const [orderfinal, setOrderfinal] = useState([])
        const [cargando, setCargando] = useState(true)
      
        useEffect(()=>{
                const item = orderSolo(orderid)
                item.then((data) => {
                  setOrderfinal([data.data()])
                  setCargando(false)
               })
              },[orderid])

                
                console.log(orderfinal)

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
                          {orderfinal.map(lastorder => {
                          return(
                          <div key={orderid}> 
                          <h4><i>La orden numero:</i> <b>{orderid}</b> <i>fue realizada con exito!</i></h4>
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
                                  <tbody key={orderid}>
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
