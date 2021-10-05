import React from 'react';
import { useParams } from 'react-router';
import Categorias from './ItemList';

const ItemListContainer = () => {
    const urlparam = useParams()
    return <>
    <Categorias catego={urlparam.catego}/>
    </>
}

export default ItemListContainer;