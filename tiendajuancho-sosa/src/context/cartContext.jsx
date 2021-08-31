import React,{ useState } from "react"

export const cartContext = React.createContext()

export default function CartContext ({children}) {

    const [cart, setCart] = useState([])
    
    const ItemAdd = ({id, item, precio, carrito, stock}) => {
        const cartFe=cart.find(itemPrev => itemPrev.id === id)
        if(cartFe){
            const cartAux=cart.map((item)=>{
                if(item.id===cartFe.id){
                    item.cantidad+=carrito
                }
                return item
            })
            setCart(cartAux)
            
        } else {
            setCart([...cart,{
                id: id,
                item: item,
                precio: precio,
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
    
    return(
        <>
            <cartContext.Provider value={{ cartContext, cart, ItemAdd, ItemRemove, ItemClear }}>
                {children}
            </cartContext.Provider>
        </>
    );
    
}