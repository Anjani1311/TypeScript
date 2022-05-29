//Type Assertion allows us to override the compiler determined type in our code. 
//It is something similar to type casting in other languages. 
//except that it does not restructure or modify the type in any way.
// The Type Assertion in TypeScript is a compile-time feature.


export {};
interface Person{
    firstName:String;
    LastName:String
}

let Person1=getPerson();
//Person1.firstName='';   , Property 'firstName' does not exist on type '{}'.ts(2339)
//Person1.LastName='';    ,Property 'firstName' does not exist on type '{}'.ts(2339)


//Some third party library or some old javascript code
function getPerson(){
    return {};
}


//As Syntax
let person2 = getPerson() as Person;
person2.firstName='';
person2.LastName='';


let person3 = getPerson();
//person3.firstName = '';
//person3.lastName = '';

let person4=<Person>getPerson();
person4.firstName = 'Anjani';
person4.LastName = '';