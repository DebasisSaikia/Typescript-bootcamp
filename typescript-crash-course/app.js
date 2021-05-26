// Object type
// const person: { name: string; age: number; role: string } = {
//   //blank {} is same as assigning object after colon;
//   name: "Debasis",
//   age: 24,
//   role: "UI Lead and Frontend Engineer",
// };
// console.log(person);
// ===================better syntax
var person = {
    name: "Debasis Saikia",
    age: 24,
    roles: ["UI lead", "Frontend Engineer"]
};
// type inferencing
var roles; //array of string
roles = ["UI dev"]; //only string can be added, any other data types will show an error ,'any' can be used instead of string to add multiple data types
console.log(person.roles);
// accessing array with for loop
for (var _i = 0, _a = person.roles; _i < _a.length; _i++) {
    var role = _a[_i];
    console.log(role.toUpperCase());
}
