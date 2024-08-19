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

/*
create a function multiply(obj) that multiply all the numeric property of object by 2

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
*/

const a = {};
const b = { key: "a"};
const c = { key: "b" };

a[b] = 256; // a["[object object]"] = 123;
a[c] = 433;// a["[object object]"] = 433;

console.log(a); // it would not take a or b as a key because we have provided 'key : "a"' in a or b and it would take it as object object, it will take b as the key when we have just provided a string.
//{[object Object]: 433}[object Object]: 433[[Prototype]]: Object



console.log(a[b]); // this will print 433

