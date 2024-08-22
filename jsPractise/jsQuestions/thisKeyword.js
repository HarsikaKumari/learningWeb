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
*/

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
