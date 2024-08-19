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

//access each key and value

for (key in me) {
    console.log(key);
    
}
