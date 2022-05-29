class EnggStudent{
    //properties
    id:number;
    name:String;
    dept:String;
    year:number;

    //using Constructor keyword
    constructor(ID:number, NAME:String, DEPT: String, YEAR: number){
        this.id=ID;
        this.name=NAME;
        this.dept=DEPT;
        this.year=YEAR;
    }
    GetYear():number{
        return this.year;
    }
    GetName():String{
        return `ID:${this.id} and Name: ${this.name}`;
    }
}
let student=new EnggStudent(1,'Anjani','CSE',2023);
console.log(student.GetName());