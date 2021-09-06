import React,{ useState } from "react"

export const cartContext = React.createContext()

export default function CartContext ({children}) {

    const [ order, setOrderid ] = useState()
    const [ cart, setCart ] = useState([])
    
    const ItemAdd = ({id, item, precio, carrito, stock}) => {
        const cartFe=cart.find(itemPrev => itemPrev.id === id)
        if(cartFe){
            const cartAux=cart.map((item)=>{
                if(item.id===cartFe.id){
                    item.cantidad+=carrito
                    item.precio=item.cantidad*precio
                }
                return item
            })
            setCart(cartAux)
            
        } else {
            setCart([...cart,{
                id: id,
                item: item,
                precio: precio*carrito,
                cantidad: carrito}
            ])
            
        }
    }
    
    const ItemRemove = ({carrit}) => {
        const cartFe=cart.filter(itemPrev => itemPrev.id !== carrit.id)
        const cartAux=cartFe
        setCart(cartAux)
    }

    const ItemClear = () => {
        setCart([])
    }

    const orderId = (id) => {
        setOrderid([])
    }
    
    return(
        <>
            <cartContext.Provider value={{ cartContext, cart, order, ItemAdd, ItemRemove, ItemClear, orderId }}>
                {children}
            </cartContext.Provider>
        </>
    );
    
}