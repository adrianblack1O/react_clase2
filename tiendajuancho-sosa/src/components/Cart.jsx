import React, { useContext } from 'react';
import { cartContext } from '../context/cartContext';
import emptycart from '../assets/emptycart.png';
import { Link } from 'react-router-dom';

const CartFINAL = () => {
    const cartview = useContext(cartContext)
    const cartfinal = cartview.cart

    const total = cartfinal.reduce((total, amount) => total + amount.precio, 0);

    return <>
     {total===0 &&
        <div className="col center-align">
         <h1><i>Carrito vacio...</i></h1>
         <div>
             <img src={emptycart} alt=""></img>
         </div>
         <Link to="/"><button className="btn-flat blue white-text">Volver a la tienda</button></Link>
         </div>
        }
        {total!==0 &&
        <div>
        <h2>Carrito de compras:</h2>
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>SUBTOTAL ($)</th>
                        <th></th>
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
               <h3>Total: ${total}</h3>
               <button className="btn-flat red white-text" onClick={()=> cartview.ItemClear()}>Limpiar el carrito</button>
               </div>
        </div>
        </div>
        }
    </>
}

export default CartFINAL;