
// types basic
const circ = (diameter: number) => {
    console.log(typeof (diameter))
    return diameter * Math.PI
}
console.log(circ(20))

// arrays and objects
let names = ['debasis', 'tilo', 'biki'];
names.push('saikia')
console.log(names)

// explicit types
let age: number;
let isTall: boolean;
let str: string;

// unions type
let mixed: (string | number | boolean)[] = []

mixed.push('debasis', 20, true)
console.log(mixed)

// defining types with interface

interface User {
    name: string;
    id: number;
}

const user: User = {
    name: 'debasis',
    id: 1
}

// Composing Types
// With TypeScript, you can create complex types by combining simple ones.There are two popular ways to do so: with Unions, and with Generics.
// 1) Unions
function getLength(obj: string | string[]) {
    return obj.length;
}

// 2)Generics
type strArr = Array<string>


// structural type system -In a structural type system, if two objects have the same shape, they are considered to be of the same type.
interface Dimension {
    x: number;
    y: number
}

const dimension = { x: 2, y: '3', z: 'dsjd' }
