//cohesive

class MyClass{
    //fiels
    fname:string;
    lastname:string;
    age:number;

    //methods
    getFistName(){
        console.log('My first name is '+this.fname)
    }
    getLastName(mylname){
        console.log('My last name is '+mylname)
    }
}
let myobj=new MyClass();
myobj.fname="Anjani";
myobj.getFistName();
myobj.getLastName("pandit");

