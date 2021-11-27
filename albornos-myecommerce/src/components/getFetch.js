const remeras = [

    {id:1 ,prod:"Remera",price:"$1500", imgUrl:"https://i.ibb.co/dfjxf3S/Remera1.jpg"}, 
    {id:2 ,prod:"Remera",price:"$1700", imgUrl:"https://i.ibb.co/Nx8KJs7/Whats-App-Image-2021-11-05-at-23-12-58-1.jpg"},
    {id:3 ,prod:"Remera",price:"$1800", imgUrl:"https://i.ibb.co/LgMgrp6/Whats-App-Image-2021-11-05-at-23-12-58.jpg" },
    {id:4 ,prod:"Remera",price:"$1900", imgUrl:"https://i.ibb.co/7pdp7z5/Whats-App-Image-2021-11-05-at-23-12-53.jpg"}
];

export const getFetch = new Promise((aceptado,rechazado)=>{
    setTimeout(()=>{
        aceptado(remeras)

    }, 3000)


})