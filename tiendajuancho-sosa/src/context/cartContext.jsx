import React,{ useState } from "react"

export const cartContext = React.createContext()

export default function CartContext( {children} ) {

    const [cart, setCart] = useState([])
    const [cartAux, setcartAux] = useState([])

    var cartA = cart.cantidad

    const cartF = (id) => {
        const cartFe = cartAux.find(itemPrev => itemPrev.id === id)

        return (cartFe===undefined ? false : true)
    }

    const ItemAdd = ({id, item, precio, carrito}) => {
        const suma = carrito + cartA
        if(cartF(id)){
            alert("El item ya existe en el carrito!")

            // setCart([cart,{
            //     id: id,
            //     item: item,
            //     precio: precio,
            //     cantidad: suma}])

            setcartAux([...cartAux,{
                id: id,
                item: item,
                precio: precio,
                cantidad: suma}],
                setCart({cantidad: suma})
                )

                //probar con agregar setcart

        } else {
            setCart({
                id: id,
                item: item,
                precio: precio,
                cantidad: carrito}
                )
                
            setcartAux([...cartAux,{
                id: id,
                item: item,
                precio: precio,
                cantidad: carrito}])
        }
    }
    
    return(
        <>
            <cartContext.Provider value={{ cartContext, cart, cartAux, ItemAdd }}>
                {children}
            </cartContext.Provider>
        </>
    )
}