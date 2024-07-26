//polyfill of map 

// arr.map((num, i, arr) => { })

Array.prototype.myMapFunction = function(cb) {
    temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

const nums = [1, 2, 3, 4, 5, 6,];

 const test = nums.myMapFunction((num, i) => {
    return num * i;
});

console.log(test);

