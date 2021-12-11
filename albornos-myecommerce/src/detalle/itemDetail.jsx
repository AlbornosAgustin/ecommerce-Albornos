import {useState,useContext} from 'react'
import { CartContextProvider } from '../components/context/CartContext'
import ItemCount from '../components/ItemCount'

const ItemDetail = ({item}) => {
    const [count, setCount] = useState(1)
    const {cartList,agregarProducto}= useContext(CartContextProvider)
    function onAdd(cant){
        setCount(cant)
        agregarProducto(item);
    }
    console.log(cartList);
    console.log(count);
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
