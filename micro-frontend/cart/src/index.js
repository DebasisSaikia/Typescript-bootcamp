const data=[
    {
        id:1,
        name:'Clothes'
    },
    {
        id:2,
        name:'Gadgets'
    },
    {
        id:3,
        name:'Appliances'
    }
]

let productString="";

// for(let i=0;i<5;i++){
//     productString+=`<div>${faker.commerce.productName()}</div>`
// }

data?.map((item)=>{
    return productString+=`<div>${item?.name}</div>`
})

document.querySelector('#cart_list').innerHTML=productString