import React from 'react'
import ItemCount from '../components/ItemCount'

const ItemDetail = ({item}) => {
    return (
        <div>
             <img src={item.pictureURL} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <ItemCount  stock={item.stock} id={item.id}/>
        </div>
    )
}

export default ItemDetail
