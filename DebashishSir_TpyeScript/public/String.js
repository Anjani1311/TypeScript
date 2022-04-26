"use strict";
let StudentName = 'Anjani';
let StudentDept = 'CSE';
//before ES6
let out1 = StudentName + " Study in the " + StudentDept + " Dept";
//After ES6
let out2 = `${StudentName} study in the ${StudentDept} Dept`;
console.log(out1);
console.log(out2);
