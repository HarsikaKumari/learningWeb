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
/*
question 1:
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
 */

/*
question 2: write a function to do this addSix(10) : output 16

function createBase(base) {
     return function addSix(num) {
        console.log(num + base);// 16   27
    } 
};
var addSix = createBase(6);
addSix(10);
addSix(23);
*/

/*
Time Optimization

function find() {
    let result = [];
    for (let i = 0; i < 1000000; i++) {
        result[i] = i * i;
    }
    return function (index) {
        console.log(result[index]);
    }
}

const closure = find();

console.time("8");
closure(8);
console.timeEnd("8");
console.time("56")
closure(56);
console.timeEnd("56");
*/

/*
question 4: setTimeout Output
*/
/*
function a() {
    for (var i = 0; i < 3; i++) { // can use let instead of var to get: 1 2 3
        function inner(i) {
            setTimeout(function log() {
                console.log(i); //what is logged? // before closure: 3 3 3 after closure: 1 2 3
            }, i * 1000);
        }
    }
    inner(i);
}

a();
*/

/*
closure to create a private counter

function counter() {
    var _counter = 0;

    function add(increment) {
        _counter += increment;
    }

    function retrieve() {
        return "Counter = " + _counter;
    }

    return {
        add,
        retrieve,
    };
}

const c = counter();
c.add(4);
c.add(5);
console.log(c.retrieve());
*/

/*
module pattern

var module = (function () {
    function privateMethod() {
        console.log("private");
    }
    return {
        publicMethod: function () {
            console.log("Public");
        },
    };
})();

module.publicMethod();
module.privateMethod();
*/

/*
make a function run only one time

function helloW() {
    let count = 0;

    return function() {
        if (count > 0) {
            console.log("Already done with hello");
        } else {
            name = "Harsika";
            console.log("Hello to ", name);
        }
        count++;
    }
}

let isHello = helloW();

isHello();
isHello();
isHello();
isHello();
isHello();
*/
/*
Polyfill of Once function

function once(func, context) {
    let ran;

    return function() {
        if (func) {
            ran = func.apply(context || this, arguments);
            func = null;
        }
        return ran;
    };
}

const hello = once((a, b) => console.log("Hello", a, b));

hello(2, 5);
hello(4, 7);
hello();
 */

// memoized polyfill
function myMemoize(fn, context) {
    const res = {};
    return function (...args) {
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]) {
            res[argsCache] = fn.call(context || this, ...args);
        } 
        return res[argsCache];
    }
}

const clumsyFun = (a, b) => {
    for (let i = 1; i <= 1000000000; i++) {} 

    return a * b;
};

const MemoizedClumsyFun = myMemoize(clumsyFun);

console.time("First call");
console.log(MemoizedClumsyFun(123, 3241));
console.timeEnd("First call");

console.time("Second call");
console.log(MemoizedClumsyFun(123, 3241));
console.timeEnd("Second call");
