var StudentName = 'Anjani';
var StudentDept = 'CSE';
//before ES6
var out1 = StudentName + " Study in the " + StudentDept + " Dept";
//After ES6
var out2 = "".concat(StudentName, " study in the ").concat(StudentDept, " Dept");
console.log(out1);
console.log(out2);
