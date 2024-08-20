/* destructuring in js
let user = {
    name: "harsika",
    age: 22,
    fullName: {
        firstName: "shishir",
        lastName: "kumari",
    }
};

const name = "kumari";
// const { name:mynName } = user;
const { fullName: {firstName} } = user;
console.log(firstName);
*/

/*
function getItem(fruitName, favFruit, ...args) {
    return [...fruitName, ...args, favFruit];
}

console.log(getItem(["banana", "orange"], "mango", "pear"));
*/

let c = {greeting: "hey"};
let d;

d = c; // we does not copy all the property in c, we just provide reference to c, so any change in c or d would affect both of the object
c.greeting = "Hello";
console.log(d.greeting); // hello
