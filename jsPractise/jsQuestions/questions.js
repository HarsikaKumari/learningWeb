// map filter reduce output based questions 
// return the name of the students in upper case

const students = [
    {name: "Piyush", rollNo: 2, marks: 45},
    {name: "Shreya", rollNo: 3, marks: 79},
    {name: "Sarah", rollNo: 4, marks: 72},
    {name: "Priya", rollNo: 5, marks: 82},
    {name: "Sheetal", rollNo: 6, marks: 99},
];

// const names = students.map((stu) => stu.name.toUpperCase());

// console.log(names);

//show the detail of only those who scored more then 80 marks

const result = students.filter((stu) => {
    return stu.marks > 80;
})

console.log(result);
