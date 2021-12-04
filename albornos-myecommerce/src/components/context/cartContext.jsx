import {useState,createContext } from "react";


export const CartContext= createContext([])

const CartContextProvider = ({children}) =>{
    const  [cartList, setCartList] = useState([])
    const agregarProducto =(item)=>{
        setCartList(item)

    }
    
    return(
        <CartContext.Provider value={{cartList,agregarProducto}}>
            { children}
        </CartContext.Provider>
        

    )

}
export default CartContextProvider