// this keyword

/*
let user = {
    name: "harsika",
    age: 22,
    childObj: {
        name: "sheetal",
        getDetail() {
            console.log(this.name); // this here points to it's parent scoop
        }
    }
}
user.childObj.getDetail();

let user = {
    name: "harsika",
    age: 22,
    getDetail() {
        name = "sheetal";
        const arrowFun = () => { console.log(this.name) }; //arrow functions do not have their own this context; they inherit this from the surrounding lexical context, so it inherits this from the scope in which it was defined(the getDetail)
        arrowFun();
    }
};

user.getDetail();
*/

/*
// this inside a class

class user {
    constructor(n) {
        this.name = n;
    }

    getName () {
        console.log(this.name);
    }
}

const User = new user("harsika");

console.log(User); //user { name: 'harsika' } name:"harsika" [[Prototype]]:Object

User.getName(); //harsika
*/

/*
const user = {
    name: "harsika",
    getName() {
        const name = "harsika!";
        return this.name;
    }
}

console.log(user.getName()); //harsika
*/

/*
function makeUser() {
    return {
        name: "harsika",
        // ref: this, make ref a function so, that it can point to the makeUser function
        ref() {
            return this;
        }
    }
}

const user = makeUser();
// console.log(user.ref); //returns the window object 
console.log(user.ref()); // will return an object as name and a function as it's property
*/

/*
const user = {
    name: "harsika",
    logMessage() {
        console.log(this.name); // points to window object
    }
}

 setTimeout(user.logMessage, 1000); // it should be empty 
setTimeout(function () {
     return user.logMessage();
 }, 1000); // harsika

const user = {
    name: "harsika kumari",
    greet() {
        return (this.name);
    },
    fareWell: () => {
        return (this.name);
    },
}

console.log(user.greet());
console.log(user.fareWell());
*/

/*
create a calculator object 

const calculator = {
    read() {
        this.a = +prompt("Enter a:", 0);
        this.b = +prompt("Enter b:", 0);
    },
    sum() {
        return this.a + this.b;
    },
    multiply() {
        return this.a * this.b;
    }
}
calculator.read();
console.log(calculator.sum());
console.log(calculator.multiply())
*/

var length = 4;

function callback() {
    console.log(this.length);
}

const obj = {
    length: 3,
    method() { // argument[callback, 3, 5] and this has a property as length so it would print 3
        arguments[0]();
    }
   // method(fn){ // here the output for this.length is 4 as fn is called inside a method inside a object
     //   fn();
};

obj.method(callback, 3, 4);

