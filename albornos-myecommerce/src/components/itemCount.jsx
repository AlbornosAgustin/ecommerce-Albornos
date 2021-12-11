import {useState} from "react";
import { Link  } from 'react-router-dom';

const InputCount = ()=>{
    return <button onClick={()=>console.log('cart')}>Finalizar compra</button>
}
const ButtonCount=({handleInter})=>{
    return<button onClick={handleInter}>Agregar Al carrito</button>
}

export default function ItemCount(props) {

   
    const [Count, setCount] = useState(0);
    const [inputType, setinputType] = useState('boton')

    const handleInter=()=>{
        setinputType('input')
    }

    
    const sumarContador = () => {
        if (Count < props.stock) {
            setCount(Count + 1)
        } else {
            alert('La Cantidad supera el stock disponible');
        }
    }

   
    const restarContador = () => {
            if (Count > 1)
             {
                setCount(Count - 1)
             } else
             {
                alert('¿Eliminar item del carrito?'); 
                setCount(0);
             }

            }
   
    
    
        return(
            <div>

                <button onClick={sumarContador}>+</button>

                <p>{Count}</p>
                
                <button onClick={restarContador}>-</button>
                {
                    inputType === 'boton'?
                    <ButtonCount handleInter={handleInter}/>
                    :
                    <Link to="/cart"> <InputCount/></Link>  
                    

                }   

               

            </div>
        )
    }