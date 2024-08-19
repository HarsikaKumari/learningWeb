/*
objects in js

const user = {
    name: "harsika kumari",
    age: 112,
    "Like this video": true,
};

console.log(user.name);
console.log(user["Like this video"]);
delete user.age;
delete user["Like this video"];
console.log(user);

const func = (function (a) {
    delete a; 
    return a;
})(5);

console.log(func);
*/

/*
const property =  "firstName";
const value = "Hasika";

const user = {
    [property]: value,
}

console.log(user);


const me = {
    name: "Harsika",
    age: 12,
    class: "12th",
}

access each key and value

for (key in me) {
    console.log(key);
    
}

const obj = {
    a: 1,
    b: 2,
    a: 3,
}

console.log(obj);
*/

// create a function multiply(obj) that multiply all the numeric property of object by 2

function multiply(obj){
    for (key in obj) {
        if (Number.isInteger(obj[key])) 
        console.log(obj[key] * 2 );
    }
}

const obj = {
    a: 100,
    b: 200,
    title: "this is my title",
}

multiply(obj);
