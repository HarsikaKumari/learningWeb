// curring in js
// from fn(a, b) into fn(a)(b)

function f(a) {
    return function(b) {
        return `${a} ${b}`;
    };
}

console.log(f(5)(4));

