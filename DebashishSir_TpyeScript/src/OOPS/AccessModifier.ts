//private --> Same Class Only
//Protected -->Same Package 
//Public --> Any one can Access


//Example:
class Person{
    protected VoterId:String;
    FirstName:String;
    private LastName:String;
    constructor(id:String, firstname:String, lastname:String){
        this.VoterId=id;
        this.FirstName=firstname;
        this.LastName=lastname;
    }
    public GetFullName():String{
        return `${this.FirstName} ${this.LastName}`;
    }
    public GetID():String{
        return `${this.VoterId}`;
    }
}

let person=new Person('A12342B','Anjani','Pandit');
console.log('person: ',person);
console.log(person.GetFullName());
console.log(person.GetID());
//console.log(person.VoterId); voterID is protected and can't be access outside class
console.log(person.FirstName);
//console.log(person.LastName);





//Protectd Example
class Student4 extends Person{
    constructor(id:String, firstname:String, lastname:String){
        super(id,firstname,lastname);
    }
    getvoter():String{
        console.log(this.FirstName);
        //console.log(this.firstname);
        return `${this.VoterId} and ${this.FirstName}`
    }
}
let getid=new Student4('s123','Ahu','Pandit');
console.log((getid.getvoter()));
//console.log((getid.LastName));
//console.log((getid.VoterId));




//ReadOnly Modifier
class Company {  
    readonly country: string = "India";  
    readonly name: string;  
      
    constructor(contName: string) {  
    this.name = contName;  
    }  
    showDetails() {  
    console.log(this.name + " : " + this.country);  
    }  
   }  
      
   let comp = new Company("JavaTpoint");  
   comp.showDetails(); // JavaTpoint : India  
      
  // comp.name = "TCS";  Cannot assign to 'name' because it is a read-only property.

  