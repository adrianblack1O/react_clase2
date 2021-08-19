import { React, useState } from "react";

const ItemCount = ({stock}) => {

	const [counter, setCounter] = useState(0);

	const quitar = () => {
		if (counter > 0) {setCounter(counter-1)}
	}

	const agregar = () => {
		if (counter < stock) {setCounter(counter+1)}
	}

	return(
		<>
  					<div>
  						<button onClick={quitar}className="black-text btn-flat grey lighten-2"> - </button>
                        <a href="#stock" className="black-text btn-flat grey lighten-5">{counter}</a>
                        <button onClick={agregar} className="black-text btn-flat grey lighten-2">+</button>
  					</div>
		</>
		)
}

export default ItemCount;