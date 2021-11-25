
import Item from './Item'

const ItemList = ({lista}) => {
    
    return (
        <div>
           {lista.map( remera =>{ return <Item prop ={remera}/>})}
        </div>
    )
}

export default ItemList
