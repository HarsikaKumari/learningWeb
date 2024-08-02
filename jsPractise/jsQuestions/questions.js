// map filter reduce output based questions 
// return the name of the students in upper case

// const students = [
//     { name: "Piyush", rollNo: 2, marks: 45 },
//     { name: "Shreya", rollNo: 3, marks: 79 },
//     { name: "Sarah", rollNo: 4, marks: 72 },
//     { name: "Priya", rollNo: 5, marks: 82 },
//     { name: "Sheetal", rollNo: 6, marks: 99 },
// ];

// const names = students.map((stu) => stu.name.toUpperCase());

// console.log(names);

//show the detail of only those who scored more then 80 marks

// const result = students.filter((stu) => {
//     return stu.marks > 80 && stu.rollNo > 5;
// })

// console.log(result);

//sum of marks of all of the students

// const result = students.reduce((acc, current) => acc + current.marks, 0);

// console.log(result);

//return only names of students who scored more then 80

// const names = students.filter((stu) => stu.marks > 80).map(student => student.name);

// console.log(names);

//return total marks for the students with marks greater then 80 after adding 20 marks to the students with scored less then 80

// const totalMarks = students.map((stu) => {
//     if (stu.marks < 80) {
//         stu.marks += 20;
//     }
//     return stu;
// }).filter((stu) => stu.marks > 80).reduce((acc, curr) => acc + curr.marks, 0);

// console.log(totalMarks);

// function scope- output based questions
// difference in var and let

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}

