"use strict";
//private --> Same Class Only
//Protected -->Same Package 
//Public --> Any one can Access
//Example:
class Person {
    constructor(id, firstname, lastname) {
        this.VoterId = id;
        this.FirstName = firstname;
        this.LastName = lastname;
    }
    GetFullName() {
        return `${this.FirstName} ${this.LastName}`;
    }
    GetID() {
        return `${this.VoterId}`;
    }
}
let person = new Person('A12342B', 'Anjani', 'Pandit');
console.log('person: ', person);
console.log(person.GetFullName());
console.log(person.GetID());
//console.log(person.VoterId); voterID is protected and can't be access outside class
console.log(person.FirstName);
//Protectd Example
class Student4 extends Person {
    constructor(id, firstname, lastname) {
        super(id, firstname, lastname);
    }
    getvoter() {
        return `${this.VoterId}`;
    }
}
let getid = new Student4('s123', 'Ahu', 'Pandit');
console.log((getid.getvoter()));
//ReadOnly Modifier
class Company {
    constructor(contName) {
        this.country = "India";
        this.name = contName;
    }
    showDetails() {
        console.log(this.name + " : " + this.country);
    }
}
let comp = new Company("JavaTpoint");
comp.showDetails(); // JavaTpoint : India  
// comp.name = "TCS";  Cannot assign to 'name' because it is a read-only property.
