import { useState } from 'react';
import 'materialize-css'

const useCounter = (initialValue = 5) => {
	
    const [ stock, setStock ] = useState(initialValue)
	const [ count, setCount ] = useState(0)
	
	const agregar = () => {
            setCount(count+1)
			setStock(stock-1)
	}
	
	const remover = () => {
		setCount(count-1)
		setStock(stock+1)
	}
	
	return {
		stock,
		count,
		agregar,
		remover
		}
	}

function Contador() {

const { stock, count, agregar, remover } = useCounter()

return(
	<>
		<div className="row">
			
    <div className="col s2">
      	<div className="card">
        	<div className="card-image">
			<span><i>{stock} disponibles</i></span>
          		<img src="images/cuenco.jpg" alt="item"></img>
        	</div>
        	<div className="card-content">
          		<p>Producto de madera artesanal 100% hecho a mano. Puede tener alguna irregularidad propia del proceso de manufactura. 
				Cada objeto es único...</p>
        	</div>
        		<div className="card-action center-align">
					<table className="centered">
						<tbody>
							<tr>
								<td>
									<button className="btn-floating btn-small waves-light red lighten-1" onClick={() => remover()} disabled={(count === 0? true: false)}><i className="material-icons">remove</i></button>
								</td>
								<td>{count}</td>
								<td>
									<button className="btn-floating btn-small waves-light green lighten-1" onClick={() => agregar()} disabled={(stock === 0? true: false)}><i className="material-icons">add</i></button>
								</td>
							</tr>	
						</tbody>
					</table>
					<a className="waves-light btn light-blue darken-1" href="#addtocart">agregar al carrito</a>
        		</div>
      		</div>
    	</div>
  	</div>
		

	</>
	)
}
	
export default Contador;