let obj = {
    id: "1",
    name: "cse"
}
//"id = 1, name = CSE"
console.log(JSON.stringify(obj.id));

const keyValStringLong = (obj) => {
    // get the keys of the object, i.e. ['id', 'name']
    const keys = Object.keys(obj);
    // console.log(keys);

    // iterate over the keys and get the value of each key and return an array of strings
    // in the format of 'key=value' i.e. ['id=1', 'name=cse']
    const result = keys.map((key) => {
        return `${key}=${obj[key]}`;
    });

    // join the array of strings with a comma and return the result
    // i.e. 'id=1, name=cse'
    // console.log(result);
    return result.join(', ');
};

console.log(keyValStringLong(obj));

// same as above but shorter
const keyValStringShort = (obj) => {
    return Object.keys(obj)
        .map((key) => `${key}=${obj[key]}`)
        .join(', ');
}
console.log(keyValStringShort(obj));

