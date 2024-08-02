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

function makeFunction() {
    var name = "harsika";
    function displayFun() {
        console.log(name);
    }
    return displayFun;
}

var myFun = makeFunction();
myFun();
