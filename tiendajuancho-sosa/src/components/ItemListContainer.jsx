import React from 'react';
import ListaProductos from './ItemList';

const ItemListContainer = (props) => {
    return <>
    <h1>Listado de productos: <i>{props.nombre}</i></h1>
    <ListaProductos />
    </>
}

export default ItemListContainer;