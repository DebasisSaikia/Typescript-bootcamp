function ing(quant:string,ingre:string,extra?:string){
    console.log(`${ingre} quantity is ${quant} and extra is ${extra!==undefined ?extra:" not present"} `)
}

ing('5g','Protein')


interface User{
    id:string,
    info?:{
        email?:string
    }
}