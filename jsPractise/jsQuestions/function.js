//What is function declaration

// function square (num) {
//     return num * num;
// }

// function expression

// const square = function(num)  { // (anonymous function)
//     return num * num;
// }

// first class function - where a function is treated as a variable, like in js functions are treated as a variable
// function displaySquare(fn) {
//     console.log("the square is " + fn(5));
// }

// displaySquare(square);

// what is IIFE - immediately invoked function expression

// (function(x) {
//     return (function(y) {
//         console.log(x); //output - 1
//     })(2);
// })(1);


// params and arguments
// when its passed while creating the function is parameter and when calling it its argument

// function multiply(a, b) { // parameter
function multiply(...nums) { // rest operator - the rest operator should always be the last parameter
    console.log(nums);
}

var arr = [3, 5, 6];

multiply(...arr); // spread operator output - [3, 5, 6]

// multiply(4, 6); // argument output - [24]

var fn = (a, b, ...num) => { // the rest operator should always be the last parameter
    console.log(b, ...num);
}

fn(1, 2, 3, 4, 5, 6,); // output - 2, 3, 4, 5, 6 as it wil take all the remaining arguments from last in the ...num

//Passing a function inside an another function and it's manupulated(called) inside it. 

// difference in arrow function and normal function -

// 1. - no use of function keyword in arrow function
// 2. - return is not needed in arrow function
// 3. - arguments key word is not known in arrow function 
// 4. - "this" keyword in arrow function refers to global object while in normal function it refers to the  parent object

