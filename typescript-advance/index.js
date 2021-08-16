// types basic
const circ = (diameter) => {
    console.log(typeof (diameter));
    return diameter * Math.PI;
};
console.log(circ(20));
// arrays and objects
let names = ['debasis', 'tilo', 'biki'];
names.push('saikia');
console.log(names);
// explicit types
let age;
let isTall;
let str;
// unions type
let mixed = [];
mixed.push('debasis', 20, true);
console.log(mixed);
const user = {
    name: 'debasis',
    id: 1
};
// Composing Types
// With TypeScript, you can create complex types by combining simple ones.There are two popular ways to do so: with Unions, and with Generics.
// 1) Unions
function getLength(obj) {
    return obj.length;
}
const dimension = { x: 2, y: '3', z: 'dsjd' };
// downlevelling
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());
