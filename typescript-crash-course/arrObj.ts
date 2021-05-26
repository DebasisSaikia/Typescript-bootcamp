// Object type
// const person: { name: string; age: number; role: string } = {
//   //blank {} is same as assigning object after colon;
//   name: "Debasis",
//   age: 24,
//   role: "UI Lead and Frontend Engineer",
// };

// console.log(person);

// ===================better syntax
const person: {
  name: string;
  age: number;
  roles: string[];
  tup: [number, string];
} = {
  name: "Debasis Saikia",
  age: 24,
  roles: ["UI lead", "Frontend Engineer"], //array of string
  tup: [1, "Learn"], //tuples are of fixed length and types,we cannot assign other type fo value or add new elements
};

person.tup.push("More"); //we can do this
// person.tup[1]=10 we cannot do this or person.tup=[0,'learn','more']

// type inferencing
let roles: string[]; //array of string
roles = ["UI dev"]; //only string can be added, any other data types will show an error ,'any'[] can be used instead of string[] to add multiple data types

console.log(person.roles);

// accessing array with for loop
for (const role of person.roles) {
  console.log(role.toUpperCase());
}
