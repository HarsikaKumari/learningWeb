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
*/

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
