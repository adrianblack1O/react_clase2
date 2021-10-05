import React from 'react';
import { Link } from 'react-router-dom';


function ProduDrop(){

return<>
    <button className='dropdown-trigger white-text btn-flat light-blue darken-3' data-target='listado'>Productos</button>
    <ul id='listado' className='dropdown-content align-left'>
            <li><Link to="/productos/Cuencos">Cuencos</Link></li>
            <li><Link to="/productos/Cubiertos">Cubiertos</Link></li>
            <li><Link to="/productos/Textil">Textil</Link></li>
    </ul>
    </>
}

export default ProduDrop;