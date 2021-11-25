import { useState,useEffect } from "react"
import ItemList from "./ItemList"
import { getFetch } from "../components/getFetch"
const ItemListContainer = () => {
   
    const [loading,setloading] = useState(true)
    const[remeras,setRemeras] = useState([])
    useEffect(() => {
       getFetch.then(data=>{
           console.log('llamada Api')
           setRemeras(data)
       })
       .catch(err=>console.log(err))
       .finally(()=>setloading(false))
       return () => {
           console.log('clean')
       }
   }, [])
   
    return (
        <div>
            <div>
            { loading ? <h1>Cargando..</h1>: <ItemList lista={remeras} />
             
            
            }

            </div>
            
        </div>
    )
}

export default ItemListContainer
