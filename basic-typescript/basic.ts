const nam:string="Debasis"

console.log(nam)

let MyReg:RegExp=/dev/


const names:string[]=nam.split(" ")
const rev=names.reverse()

// object

interface val{
    firstName:string,
    age:number,
    cool?:boolean
}

const obj:val={
    firstName:'Debasis',
    age:25,
}
//or
// const obj:{firstName:string,age:number}={
//     firstName:'Debasis',
//     age:25,
// }

// objects mapping
const ids:Record<number,string>={
    10:"a",
    20:"b",
}

ids[30]="c"

console.log(obj.firstName.slice(0,2))