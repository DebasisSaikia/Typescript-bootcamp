// functions
function sum(n1, n2) {
    return n1 + n2;
}
function combine(num) {
    console.log("Result : ", +num);
}
combine(sum(3, 7));
// function types
// let funcType: Function;
var funcType; //this will check function with two parameters
funcType = sum;
// funcType=combine  this will show an error because it don't accept any parameter
console.log("the sum is", funcType(4, 5));
// callback function
var addCall = function (a, b, cb) {
    var result = a + b;
    cb(result);
};
addCall(4, 5, function (result) {
    console.log(result);
});
