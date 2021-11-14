const item = (props) => {
    return (
        <div>
          <h1>{props.prod}</h1>  
          <img src={props.imgUrl} alt=""></img>
          <h1>Precio:{props.price}</h1>    
        </div>
    )
}

export default item
