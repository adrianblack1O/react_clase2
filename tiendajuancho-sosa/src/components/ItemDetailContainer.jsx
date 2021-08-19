import React from 'react';
import { useParams } from 'react-router-dom';
import ProduDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const urlparam = useParams()
    return <>
    <ProduDetail produid={urlparam.produid}/>
    </>
}

export default ItemDetailContainer;