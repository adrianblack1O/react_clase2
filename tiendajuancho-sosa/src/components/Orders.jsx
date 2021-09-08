
import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

function Orders () { 

        const cartview = useContext(cartContext)
        const orderid = cartview.order
        const cart = cartview.cart
        const total = cart.reduce((total, amount) => total + amount.precio, 0);


                return <>
                          {!orderid &&
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
                          {orderid &&
                          <div className="container center-align">
                          <h5><i>La orden numero:</i> <b>{orderid}</b> <i>fue realizada con exito!</i></h5>
                          </div>
                        }
                        {orderid &&
                        <div className="container">
                        <div className="card align-right">
                          <table className="">
                          <thead className="light-blue lighten-5">
                              <tr>
                                  <th>Producto</th>
                                  <th>Cantidad</th>
                              </tr>
                          </thead>
                          {cart.map( order =>
                              <tbody key={order.id}>
                              <tr>
                              <td>{order.item}</td>
                              <td><b>{order.cantidad}</b></td>
                              </tr>
                          </tbody>
                          )}
                          </table>
                          </div>
                          <h4 className="right-align">Total: <i>${total} </i></h4>
                          <div className="center-align">
                          <Link to="/"><button className="col s12 white-text btn green darken-1" onClick={()=> {cartview.ItemClear(); cartview.orderId();}}>Volver al inicio</button></Link>
                          </div>
                        </div>
                        }
                      </>
}

export default Orders;
