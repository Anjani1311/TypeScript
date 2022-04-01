let  StudentName: string='Anjani';
let  StudentDept: string='CSE';

//before ES6
let out1:string=StudentName+" Study in the "+StudentDept+" Dept";

//After ES6
let out2:string=`${StudentName} study in the ${StudentDept} Dept`;

console.log(out1)
console.log(out2)

