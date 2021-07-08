// types basic
var circ = function (diameter) {
    console.log(typeof (diameter));
    return diameter * Math.PI;
};
console.log(circ(20));
// arrays and objects
var names = ['debasis', 'tilo', 'biki'];
names.push('saikia');
console.log(names);
// explicit types
var age;
var isTall;
var str;
// unions type
var mixed = [];
mixed.push('debasis', 20, true);
console.log(mixed);
