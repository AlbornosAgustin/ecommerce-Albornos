const remeras = [

    {id:1 ,prod:"Remera",price:"$1500", imgUrl:"https://i.ibb.co/dfjxf3S/Remera1.jpg"}, 
    {id:2 ,prod:"Remera",price:"$1700", imgUrl:"img\Remera1.jpeg"},
    {id:3 ,prod:"Remera",price:"$1800", imgUrl:"img\Remera1.jpeg"},
    {id:4 ,prod:"Remera",price:"$1900", imgUrl:"img\Remera1.jpeg"}
];

export const getFetch = new Promise((aceptado,rechazado)=>{
    setTimeout(()=>{
        aceptado(remeras)

    }, 3000)


})