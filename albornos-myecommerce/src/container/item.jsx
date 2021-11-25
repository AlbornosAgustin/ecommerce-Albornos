const item = ({prop}) => {
    return (
        <div>
          <h1>{prop.prod}</h1>  
          <img src={prop.imgUrl} alt=""></img>
          <h1>Precio:{prop.price}</h1>    
        </div>
    )
}

export default item
