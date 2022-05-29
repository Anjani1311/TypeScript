"use strict";
//Numeric Enum
//enums without initializers either need to be first, 
//or have to come after numeric enums initialized with numeric constants or other constant enum members.
var Number2;
(function (Number2) {
    Number2["Up"] = "Anjani";
    // down;  , Enum member must have initializer.ts(1061)
})(Number2 || (Number2 = {}));
var Number3;
(function (Number3) {
    Number3[Number3["Up"] = 0] = "Up";
    Number3["down"] = "Anjani";
})(Number3 || (Number3 = {}));
function respond(name, value) {
    console.log("Name: " + name + ", Value: " + value);
}
respond("Sahu", Number3.down);
//String Enum
var BTECH;
(function (BTECH) {
    BTECH["CIVIL"] = "CIVIL ENGG";
    BTECH["MACH"] = "MACHNACAL ENGG";
    BTECH["EC"] = "ELECTRAL ENGG";
    BTECH["ECE"] = "ELECTRONIC ENGG";
    BTECH["CS"] = "COMPUTER SCIENCE";
})(BTECH || (BTECH = {}));
var Student;
(function (Student) {
    Student[Student["SAHNIK"] = 0] = "SAHNIK";
    Student[Student["SOUMYDEEP"] = 1] = "SOUMYDEEP";
    Student[Student["SOURAV"] = 2] = "SOURAV";
})(Student || (Student = {}));
var SALARY;
(function (SALARY) {
    SALARY[SALARY["SAHNIK"] = 14000] = "SAHNIK";
    SALARY[SALARY["SOUMYDEEP"] = 24000] = "SOUMYDEEP";
    SALARY[SALARY["SOURAV"] = 34000] = "SOURAV";
})(SALARY || (SALARY = {}));
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
function IsItSummer(month) {
    let isSummer;
    switch (month) {
        case Month.Jan:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log(IsItSummer(Month.Jan));
console.log(IsItSummer(Month.Mar));
//Heterogeneous Enum
var Number4;
(function (Number4) {
    Number4[Number4["Up"] = 8] = "Up";
    Number4["down"] = "Anjani";
})(Number4 || (Number4 = {}));
