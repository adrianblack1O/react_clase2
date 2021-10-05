import React from 'react';
import ReactDOM from 'react-dom';
import CartContext from './context/cartContext.jsx';
import Rooter from './pages/rooter.jsx';

ReactDOM.render(
    <React.StrictMode>
        <CartContext>
                <Rooter />
        </CartContext>
    </React.StrictMode>
, document.getElementById('root'));