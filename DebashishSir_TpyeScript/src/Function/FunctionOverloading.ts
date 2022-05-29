function add(a: string, b: string): string;

function add(a: number, b: number, c:number): number;

function add(a: any, b: any): any {
  return a + b;
}

console.log(add("Anjani ","Pandit"));
console.log(add(10,20,47));


//Function overloading with different number of parameters and types with same name is not supported.
function display(a:string, b:string):void{
    console.log(a+b);
}

function display(a:number):void{
    console.log(a);
}

//Thus, in order to achieve function overloading, we must declare all the functions with possible signatures. 
//Also, function implementation should have compatible types for all declarations.

//How to acheive function overloading
function grettings(person: string): string {
  return `Hello, ${person}`;
}
let xh1: string = grettings('World');
console.log('xh1:', xh1);

//Ex1:
function grettings1(person: string | number | boolean): string | number | boolean {
  return `Hello, ${person}`;
}

let xh2: string = grettings('World');
console.log('xh1:', xh2);

//Ex2:
function greet(person: string): string;
function greet(person: string[]): string[];
function greet(person: number): number;
//We can or can't  write these three function.

function greet(person:unknown): unknown {
  if (typeof person === 'string') {
    return `Hello ${person}`;
  } else if (Array.isArray(person)) {
    return person.map((name) => `Hello ${person}`);
  } else if (typeof person === 'number') {
    return person;
  }
  throw new Error(`Unable to Greet`);
}