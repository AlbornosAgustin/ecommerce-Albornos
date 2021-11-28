import './item.css';
const item = ({prop}) => {
    return (
      <div class="page-contentC">
        <div class="product-conteiner">
          <h1 >{prop.prod}</h1>  
          <img  src={prop.imgUrl} alt=""></img>
          <h1>Precio:{prop.price}</h1>    
        </div>

      </div>
        
    )
}

export default item
