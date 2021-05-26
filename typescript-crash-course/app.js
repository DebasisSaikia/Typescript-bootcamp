// data types
function add(num1, num2, showResult, phrase) {
    var result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var n1 = 5;
var n2 = 20;
var printResult = true;
var resultPhrase = "Result is: ";
add(n1, n2, printResult, resultPhrase);
