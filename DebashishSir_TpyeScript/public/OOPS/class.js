"use strict";
class EnggStudent {
    constructor(ID, NAME, DEPT, YEAR) {
        this.id = ID;
        this.name = NAME;
        this.dept = DEPT;
        this.year = YEAR;
    }
    GetYear() {
        return this.year;
    }
    GetName() {
        return `ID:${this.id} and Name: ${this.name}`;
    }
}
let student = new EnggStudent(1, 'Anjani', 'CSE', 2023);
console.log(student.GetName());
