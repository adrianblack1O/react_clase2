import React,{ useState } from "react"

export const cartContext = React.createContext()

export default function CartContext ({children}) {

    const [ order, setOrderid ] = useState()
    const [ cart, setCart ] = useState([])
    const [ dcliente, setDcliente ] = useState()
    
    const ItemAdd = ({id, item, precio, cartq, stock}) => {
        const cartFe=cart.find(itemPrev => itemPrev.id === id)
        if(cartFe){
            const cartAux=cart.map((item)=>{
                if(item.id===cartFe.id){
                    item.cantidad+=cartq
                    item.precio=item.cantidad*precio
                }
                return item
            })
            setCart(cartAux)
            
        } else {
            setCart([...cart,{
                id: id,
                item: item,
                precio: precio*cartq,
                cantidad: cartq}
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
        setOrderid(id)
    }

    const datosCliente = (cliente) => {
        setDcliente(cliente)
    }
    
    return(
        <>
            <cartContext.Provider value={{ cartContext, cart, order, dcliente, ItemAdd, ItemRemove, ItemClear, orderId, datosCliente }}>
                {children}
            </cartContext.Provider>
        </>
    );
    
}