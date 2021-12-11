import { useCartContext } from "../context/CartContext"


function Cart() {

    const {cartList, varciarCarrtio} = useCartContext()

    return (
        <div>
            { cartList.map(prod => <li key={prod.id}> {prod.prod} { prod.stock}</li>)  }
            <button onClick={()=> varciarCarrtio()}>vaciar carrito</button>
        </div>
    )
}

export default Cart