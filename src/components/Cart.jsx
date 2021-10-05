import React, { useContext } from 'react';
import { cartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';
import { addOrder } from '../fbase/firebase';
import DatosPersonales from './CheckoutForm';

const Cart = () => {
    
    const cartview = useContext(cartContext)
    const cartfinal = cartview.cart
    const fecha = new Date().toLocaleString()
    const total = cartfinal.reduce((total, amount) => total + amount.precio, 0);
    const clientef = cartview.dcliente

    const addOrderAux = () => {
        const order= addOrder(cartfinal,total, fecha, clientef)
        order.then((data)=>{
            cartview.orderId(data.id)
        })
    }

    return <>
    {total !== 0 && clientef === undefined &&
    <div className="container">
    <DatosPersonales />
    </div>
    }
     {total===0 &&
        <div className="col center-align">
         <h3><i>Carrito vacio...</i></h3>
         <div>
             <img src="/images/emptycart.png" alt=""></img>
         </div>
         <Link to="/"><button className="btn-flat green darken-1 white-text">Volver a la tienda</button></Link>
         </div>
        }
        {clientef !== undefined &&
        <div className="container">
        <h4>Carrito de compras:</h4>
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>SUBTOTAL($)</th>
                        <th><button className="btn-flat red white-text" onClick={()=> cartview.ItemClear()}>Vaciar</button></th>
                    </tr>
                </thead>
        {cartfinal.map(carrit => {
            return(
                    <tbody key={carrit.id}>
                        <tr>
                        <td>{carrit.item}</td>
                        <td>{carrit.cantidad}</td>
                        <td>{carrit.precio}</td>
                        <td><button className="btn-flat blue white-text" onClick={()=> cartview.ItemRemove({carrit})}>Quitar</button></td>
                        </tr>
                    </tbody>
                    )
                })}
           </table>
           <div className="right-align">
               <h4>Total: ${total}</h4>
               <Link to="/checkout"><button className="btn-flat green darken-1 white-text" onClick={()=> {addOrderAux()}}>Finalizar la compra</button></Link>
               </div>
        </div>
        </div>
        }
    </>
}

export default Cart;