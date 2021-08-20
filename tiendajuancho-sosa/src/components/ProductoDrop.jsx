import React from 'react';
import { Link } from 'react-router-dom';
import { productos } from './Datos';

const categoprodu = [...new Set(productos.map(item => item.categoria))];

function ProduDrop(){

return<>
    <button className='dropdown-trigger white-text btn-flat light-blue darken-3' data-target='listado'>Productos</button>
    <ul id='listado' className='dropdown-content align-left'>
            <li><Link to="/productos/todos">Todos</Link></li>
            <li className="divider"></li>
            {categoprodu.map(cateprod => {
                return(
            <li key={cateprod}><Link to={`/productos/${cateprod}`}>{cateprod}</Link></li>
                )
            })}
    </ul>
    </>
}

export default ProduDrop;