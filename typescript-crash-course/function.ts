// functions
function sum(n1: number, n2: number) {
  return n1 + n2;
}
function combine(num: number): void {
  console.log("Result : ", +num);
}

combine(sum(3, 7));

// function types
// let funcType: Function;
let funcType: (a: number, b: number) => number; //this will check function with two parameters
funcType = sum;
// funcType=combine  this will show an error because it don't accept any parameter

console.log(`the sum is`, funcType(4, 5));

// callback function
const addCall = (a: number, b: number, cb: (num: number) => void) => {
  const result = a + b;
  cb(result);
};
addCall(4, 5, (result) => {
  console.log(result);
});
