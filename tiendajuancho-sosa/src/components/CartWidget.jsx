import React, { useContext } from 'react';
import { cartContext } from '../context/cartContext';

const CartWidget = () => {
    const cartview = useContext(cartContext)
    const cartitems = cartview.cart

    const itemst = cartitems.reduce((total, amount) => total + amount.cantidad, 0);

    return <>
            {itemst!==0 &&
            <ul>
            <li><i className="material-icons left">shopping_cart</i></li>
            <li><span>({itemst})</span></li>
            </ul>
            }
    </>
}

export default CartWidget;