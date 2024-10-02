const myArray = [78, 11, 12, 14, 15, 21];

// 1. Find the sum of all elements in the array

let sum = 0;
myArray.forEach(num => {
    sum += num
});
console.log("The total sum is " + sum);

// 2. Find the average of all elements in the array
let average = sum / myArray.length; 
console.log("The average is " + average);

// 3. Find the maximum element in the array
let max = myArray[2];
myArray.forEach(num => {
    if (num > max) {
        max = num;
    }
    // console.log(max);
});
console.log("The maximum is " + max);


const myObject = [
    {
        location: "Kathmandu",
        temperature: {
            max: 40,
            min: 20,
        },
    },
    {
        location: "Pokhara",
        temperature: {
            max: 50,
            min: 30,
        },
    },
    {
        location: "Dhaka",
        temperature: {
            max: 60,
            min: 40,
        },
    },
];

// from the above array find the location with max temperature. Just print the location.
let max2 = myObject[0].temperature.max;
myObject.forEach(index => {
    if (max2 < index.temperature.max) {
        max2 = index.temperature.max;
    }
});
console.log("The maximum temperature is " + max2); 
