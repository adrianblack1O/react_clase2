import React, { useContext } from 'react';
import { cartContext } from '../context/cartContext';

const CartWidget = () => {
    const cartview = useContext(cartContext)
    console.log(cartview.cart)
    
    return (
        <div><h1>Proximamente...</h1></div>
    )
}

export default CartWidget; 

