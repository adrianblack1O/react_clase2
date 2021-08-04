import React from 'react';
import Contador from './ItemCount';

const ItemListContainer = (props) => {
    return <>
    <h1>Hola <i>{props.nombre}</i>, bienvenidos!</h1>
    <Contador />
    </>
}

export default ItemListContainer;