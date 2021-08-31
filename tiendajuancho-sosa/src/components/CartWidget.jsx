import React, { useContext } from 'react';
import { cartContext } from '../context/cartContext';

const CartWidget = () => {
    const cartview = useContext(cartContext)
    const cartfinal = cartview.cart
    console.log(cartview.cart)

    return <>
    
        {cartfinal.map(carrit => {
            return(
                <div className="col s2" key={carrit.id}>{carrit.item}
                <button className="btn-flat" onClick={()=> cartview.ItemRemove({carrit})}>quitar</button>
                </div>
            )
          })}
    </>
}

export default CartWidget;