
function add(a: number,b: number){
    return Number(a+b)
}

export default add;

export const strFunc=(a:string,b:string|number):string=>{
    return String(`${a}`+`${b}`)
}