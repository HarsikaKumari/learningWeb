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

function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(sum(3)(5)(6));

