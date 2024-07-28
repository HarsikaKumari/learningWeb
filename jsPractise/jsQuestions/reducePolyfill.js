// polyfill of reduce function

// arr.reduce((value, i) => { }, initialValue)

Array.prototype.myReduce = function (cb, initialValue) {

    //error handling
    if (this === null || this === undefined) {
        throw new TypeError("Reduce is called on null or undefined")
    }

    let acc = initialValue;
    for (let i = 0; i < this.length; i++) {
        acc = acc ? cb(acc, this[i]) : this[i];
    }
    return acc;
}

console.log([10, 20, 30, 40].myReduce((acc, i) => {
    return acc + i;
}, 0));


