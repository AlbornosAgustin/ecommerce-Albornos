import { useState,useEffect } from "react"
import itemList from "./itemList"

const ItemListContainer = () => {
   
    const [loading,setloading] = useState(true)
    useEffect(() => {
       getFetch
       .then(data=>{
           console.log('llamada Api')
           setRemeras(data)
       })
       .catch(err=>console.log(err))
       .finally(()=>setLoading(false))
       return () => {
           console.log('clean')
       }
   }, [])
   
    return (
        <div>
            <div>
             {loading ? <h1>Cargando..</h1>: <itemList/>
             
            
            }

            </div>
            
        </div>
    )
}

export default ItemListContainer
