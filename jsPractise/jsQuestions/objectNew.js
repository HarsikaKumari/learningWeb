// destructuring in js
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
