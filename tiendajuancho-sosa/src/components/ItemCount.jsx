import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/cartContext";

const ItemCount = ({id, item, precio, stock}) => {

	const itemq = useContext(cartContext)

	const [counter, setCounter] = useState(0);
	const [carrito, setCarr] = useState(0)

	const quitar = () => {
		if (counter > 0) {
			setCounter(counter-1)
			setCarr(counter-1)
		}
	}

	const agregar = () => {
		if (counter < stock) {
			setCounter(counter+1)
			setCarr(counter+1)
		}
	}

	return(
		<>
  					<div className="col s6">
						<div className="row center-align">
  						<button onClick={quitar}className="black-text btn-flat grey lighten-2"> - </button>
                        <button className="black-text btn-flat grey lighten-5">{counter}</button>
                        <button onClick={agregar} className="black-text btn-flat grey lighten-2">+</button>
						</div>
						<div className="row">
						<button className="col s12 black-text btn-flat white lighten-2" onClick={()=> {itemq.ItemAdd({id, item, precio, carrito}); setCounter(0);}} disabled={(carrito === 0? true: false)}>+agregar al carrito</button>
						</div>
						<div className="row">
						{itemq.cart.length !== 0 &&
						<Link to="/cart"><button className="col s12 white-text btn-flat green darken-1 darken-3">IR AL CARRITO</button></Link>
						}
						</div>
  					</div>
		</>
		)
}

export default ItemCount;