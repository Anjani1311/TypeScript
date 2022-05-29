//Array which return string
interface nameArray{
    [index:number]:String;
}
//use of the interface
let myName: nameArray;
myName=['Anjani', 'Resham', 'Sahin'];
console.log(myName[0]);

//Array which return number
interface ageArray{
    [index:number]:number;
}
var myAge:ageArray;
myAge=[12,43,23];
console.log("My age is "+myAge[2]+".");