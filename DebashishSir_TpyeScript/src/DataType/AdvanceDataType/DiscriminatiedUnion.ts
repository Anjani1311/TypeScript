export {};
interface Employee {
  type: 'Employee';
  employeecode: number;
  name: string;
}

interface Visitor {
  type: 'Visitor';
  visitorcode: number;
  name: string;
}

interface Contractor {
  type: 'Contractor';
  contractorcode: number;
  name: string;
}

type Person = Employee | Visitor | Contractor;

function AllowRestrictedArea1(person: Person): boolean {
  //console.log(person.employeecode); //Property 'employeecode' does not exist on type 'Person'.
  if (person.type == 'Employee') {
    console.log('Allowed to Employee ' + person.employeecode);
    return true;
  } else if (person.type == 'Visitor') {
    console.log('Not Allowed to Visitor ' + person.visitorcode);
    return false;
  } else {
    console.log('Allowed to Contractors ' + person.contractorcode);
    return true;
  }
}

 

type Person1 = Employee | Visitor | Contractor
 
function AllowRestrictedArea2(person: Person1): void {
    //console.log(person.employeecode) //Property 'employeecode' does not exist on type 'Person'.
}
 
 
 
//let employee:Employee = { type:"Employee", employeecode:1, name:"Rahul"}
//AllowRestrictedArea1(employee)
 
let vistor:Visitor = { type:"Visitor", visitorcode:2, name:"Sachin"}
AllowRestrictedArea1(vistor)
 
//let contractor:Contractor = { type:"Contractor", contractorcode:3, name:"Saurav"}
//AllowRestrictedArea1(contractor)
 
