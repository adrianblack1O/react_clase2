import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/cartContext";

const ItemCount = ({id, item, stock}) => {

	const itemq = useContext(cartContext)

	const [counter, setCounter] = useState(0);
	const [carrito, setCarr] = useState(0)

	const quitar = () => {
		if (counter > 0) {setCounter(counter-1)}
	}

	const agregar = () => {
		if (counter < stock) {setCounter(counter+1)}
	}
	
	const agrealcarri = () => {
		setCarr(counter)
		setCounter(0)
	}

	return(
		<>
  					<div className="col s6">
						<div className="row center-align">
  						<button onClick={quitar}className="black-text btn-flat grey lighten-2"> - </button>
                        <button className="black-text btn-flat grey lighten-5">{counter}</button>
                        <button onClick={agregar} className="black-text btn-flat grey lighten-2">+</button>
						</div>
						<button className="col s12 black-text btn-flat white lighten-2" onClick={agrealcarri}>+ agregar al carrito</button>
						<div className="row">
						{carrito > 0 &&
						<Link to="/cart"><button className="col s12 white-text btn-flat light-blue darken-3" onClick={()=> itemq.ItemAdd({item, carrito})}>({carrito}) TERMINAR LA COMPRA</button></Link>
						}
						</div>
  					</div>
		</>
		)
}

export default ItemCount;