// closure in js

// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
// displayName() is the inner function, that forms the closure
//         console.log(name); // use variable declared in the parent function
//     }
//     displayName();
// }
// init();

// function makeFunction() {
//     var name = "harsika";
//     function displayFun(num) {
//         console.log(name, num);
//     }
//     return displayFun;
// }

// var myFun = makeFunction();
// myFun();

// makeFunction()(17);

// closure scope chain:-

/*
 global scope
const e = 10;
function sum(a) {
    return function (b) {
        return function (c) {
            // outer functions scope
            return function (d) {
                // local scope
                return a + b + c + d + e;
            };
        };
    };
}

console.log(sum(1)(2)(3)(4)); // 20
*/
// question 1:
let count = 0;
(
    function printCount() {
        if (count === 0) {
            let count = 1; //shadowing
            console.log(count); // 1
        }
        console.log(count); //0
    }
) ();

