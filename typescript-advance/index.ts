
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
    name: String;
    id: Number;
}

const user: User = {
    name: 'Debasis',
    id: 1
}
