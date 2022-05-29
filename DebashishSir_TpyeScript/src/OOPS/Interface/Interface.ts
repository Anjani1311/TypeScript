export{};
interface IPerson{
    firstName:String;
    lastName:String;
    sayHii:()=>String;
}

let Customer:IPerson={
    firstName:'Anjani',
    lastName:'Pandit',
    sayHii:():String=>{
        return `Hii`;
    }
}
console.log('Customer Order Detaills:');
console.log(Customer.sayHii());
console.log(Customer.lastName);
console.log(Customer.firstName);

var employee: IPerson = {
    firstName: 'Vikas',
    lastName: 'Jainer',
    sayHii: (): string => {
      return 'Hello';
    },
  };
  
  console.log('Employee  Object Details: ');
  console.log(employee.sayHii());
  console.log(employee.firstName);
  console.log(employee.lastName);