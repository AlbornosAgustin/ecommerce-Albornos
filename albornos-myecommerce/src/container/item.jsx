import './item.css';
const item = ({prop}) => {
    return (
      <div class="page-contentC">
        <div class="product-conteiner">
          <h1 >{prop.prod}</h1>  
          <img  src={prop.imgUrl} alt=""></img>
          <h3 class>Precio:{prop.price}</h3>    
        </div>

      </div>
        
    )
}

export default item
