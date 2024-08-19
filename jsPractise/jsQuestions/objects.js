//objects in js

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

/*
const func = (function (a) {
    delete a; 
    return a;
})(5);

console.log(func);
*/
