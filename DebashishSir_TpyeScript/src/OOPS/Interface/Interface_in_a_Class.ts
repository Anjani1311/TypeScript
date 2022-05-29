interface Person6{
    firstName:String;
    lastName:String;
    age:number;
    FullName:()=>String;
    GetAge:()=>number;
}

class Employee4 implements Person6{
    firstName:String;
    lastName:String;
    age:number;
    FullName(){
        return this.firstName+ ' '+this.lastName;
    };
    GetAge(){
        return this.age;
    };
    constructor(firstN: string, lastN: string, getAge: number){
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = getAge;
    }
}
// using the class that implements interface
let myEmployee = new Employee4('Abhishek', 'Mishra', 25);
let fullName = myEmployee.FullName();
let Age = myEmployee.GetAge();
console.log('Name of Person: ' + fullName + '\nAge: ' + Age);