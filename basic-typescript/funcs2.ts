type Mutations= (v:number)=>number

export function mutateArr(numbers: number[],mutate:Mutations):number[]{
    return numbers.map(mutate)
}

console.log(mutateArr([1,2,3],(v)=>v+10));



// functions returning a function

export function createAdder(num:number):(val: number) => number{
    return (val:number)=>val+num
}

const addOn=createAdder(1);

console.log(addOn(5));