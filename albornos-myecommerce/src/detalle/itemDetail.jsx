import {useState,useContext} from 'react'
import { CartContext } from '../components/context/cartContext'
import ItemCount from '../components/ItemCount'

const ItemDetail = ({item}) => {
    const [count, setCount] = useState(1)
    const {cartList,agregarProducto}= useContext(CartContext)
    function onAdd(cant){
        setCount(cant)
        agregarProducto(item);
    }
    console.log(cartList);
    return (
        <div>
             <img src={item.pictureURL} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <ItemCount  stock={item.stock} id={item.id} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail
