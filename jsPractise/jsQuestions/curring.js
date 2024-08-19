// curring in js
// from fn(a, b) into fn(a)(b)

/*
function f(a) {
    return function(b) {
        return `${a} ${b}`;
    };
}

console.log(f(5)(4));
*/

/*
function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(sum(3)(5)(6));
*/

/* Question 2:-
 evaluate("sum")(2)(3) => 5
 evaluate("multiply")(2)(3) => 5
 evaluate("divide")(2)(3) => 5
 evaluate("subtract")(2)(3) => 5

function evaluate(operation) {
    return function(a) {
        return function(b) {
            if (operation === "sum") return a + b;
            else if (operation === "multiply") return a * b;
            else if (operation === "divide") return a / b;
            else if (operation === "subtract") return a - b;
            else return "invalid operation";
        };
    };
}

console.log(evaluate("sum")(2)(3));
console.log(evaluate("multiply")(2)(3));
console.log(evaluate("divide")(2)(3));
console.log(evaluate("subtract")(2)(3));
console.log(evaluate(" ")(2)(3));

const num = evaluate("multiply");
console.log(num(2)(3)); //6
console.log(num(4)(3)); //12
*/

/*
infinite currying eg. sum(3)(4)(5)()...

function add(a) {
    return function (b) {
        console.log("b = " + b);
        console.log("a before return = " + a);
        if(b) return add(a + b);
        console.log("a after return = " + a);
        return a; 
        
    }
}
console.log(add(3)(4)(5)());
*/

/*
Curring vs partial application

function sum(a) {
    return function(b, c) {
        return a + b + c;
    } // this is partial application where the number of parameter passed must not be equal to the number of returning function the currying function has
}

const s = sum(2);
console.log(s(3, 4));

function add(a) {
    return function(b) { 
        return function(c) {
            return a + b + c;
        } // this is currying 
    }
}

console.log(add(2)(3)(4));
*/

/*
manipulating DOM

function updateElementText(id) {
    return function(content) {
        document.querySelector("#" + id).textContent = content;
    };
}

const updateHeader = updateElementText("Header");

updateHeader("Hello World!!");
updateHeader("Hello Sheetal!!");

*/

// a function curry that converts f(a, b, c) to f(a)(b)(c)

function curry(fn) {
    return function curriedFun(...args) {
        // console.log(args.length, fn.length);  
        if (args.length >= fn.length)
            return fn(...args);
        else
            return function (...next) {
                return curriedFun(...args, ...next);
            };
    };
}

const sum = (a, b, c, d) => a + b + c + d;

const totalSum = curry(sum);

console.log(totalSum(2)(3)(4)(5));

