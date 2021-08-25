import React,{ useState } from "react"

export const cartContext = React.createContext()

const cartDefault = {
    item: {},
    quantity: ''
}

export default function CartContext( {children} ) {

    const [cart, setCart] = useState(cartDefault)

    const ItemAdd = ({item, carrito}) => {
    if(item!==cart.item){
        AddToCart({item, carrito})
    } else {
        alert("El item ya existe en el carrito!")
        }
    }

    const AddToCart = ({item, carrito}) => {
        const armocart ={
            item: item,
            quantity: carrito
            }
        setCart(armocart)
        }    

    const RemoveCart = ({item, carrito}) => {
        const armocart = {}
        setCart(armocart)
        }
    
    return(
        <>
            <cartContext.Provider value={{ cartContext, cart, ItemAdd, AddToCart, RemoveCart }}>
                {children}
            </cartContext.Provider>
        </>
    )
}