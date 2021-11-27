import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import { getFetch } from '../components/getFetch';

const itemDetailContainer = () => {
    const [productoIndividual, setProductoIndividual]= useState({}); 
    const [loading, setLoading] = useState(true);
    const { itemIdParams } = useParams();

    useEffect(() => {
            
        getFetch .then((prodEncontrado)=>{
            console.log('OK');
            setProductoIndividual(prodEncontrado) 
        })
          .catch((error)=>{
              console.log('ERROR');
          })
          .finally(()=>{
              setLoading(false)
          }
          )
      }, [itemIdParams])
      console.log(productoIndividual);
      return(
        <>
            <p style={{fontSize: 20, color: "black"}}> 
                Lista 
            </p>
            <div style={{display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'}}>
                {loading 
                    ? 
                <h1>Cargando...</h1> 
                    : 
                <ItemDetail item={productoIndividual}/> }
            </div>
        </>
        )
}

export default itemDetailContainer
