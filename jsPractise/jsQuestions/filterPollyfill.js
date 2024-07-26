//polyfill for filter

Array.prototype.myFilter = function (cb) {
    let temp = [];

    for (let i = 0; i < this.length; i++) {
        if(cb(this[i])) temp.push(this[i]);
    }
    return temp;
};

const nums = [1, 2, 3, 4, 5, 6];
  const test = nums.myFilter((num, i) => {
    return num > 2;
 });

 console.log(test);
