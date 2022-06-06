type Tup=[
    x:number,
    y:number,
    z:number,
]

function threeCord(c1:Tup,c2:Tup){
        return [c1[0]+c2[0]]
}

console.log(threeCord([0,0,0,],[10,40,20]))


function simpleStr(initial:string):[()=>string,(v:string)=>void]{
 let str:string=initial
 return [
     ()=>str,
     (v:string)=>(
         str=v
     )
 ]
}

// const [str1get,str2set]=simpleStr('Hello')

// console.log(str1get());
// str2set("Godbye")



// GENERICS
function gen<T>(initial:T):[()=>T,(v:T)=>void]{
    let str:T=initial
    return [
        ()=>str,
        (v:T)=>(
            str=v
        )
    ]
}

const [strGet,strSet]=gen<string|number>('Hello')
console.log(strGet());
