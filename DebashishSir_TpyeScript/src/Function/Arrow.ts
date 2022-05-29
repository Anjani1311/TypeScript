let sum=(x:number, y:number):number=>{
    return x+y;
};
console.log(sum(10,20));


let Print=()=>{
    console.log("Anjani kumari pandit");
}
Print();


class Employees{
    empCode:number;
    empName:string;
    constructor(code:number, name:string){
        this.empCode=code;
        this.empName=name;
    }
    display=()=>{
        console.log(this.empCode+" "+this.empName);
    }
}
let emp12=new Employees(1,"Anjani");
emp12.display();
