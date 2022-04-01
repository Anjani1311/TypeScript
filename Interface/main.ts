let example=(fName, lName)=>{
    console.log(fName);
    console.log(lName);
}
example("Anjani","pandit");


//inline annotations (fName:string, lName:string)
let example1=(fName:string, lName:string)=>{
    console.log(fName);
    console.log(lName);
}
//example1(55,"pandit");   
//Argument of type 'number' is not assignable to parameter of type 'string'.
  

//Encapsulation use here because we have to write large code for attribute
let namets=(namePro)=>{
    console.log(namePro.fname);
    console.log(namePro.lname);
    console.log(namePro.age);
    console.log(namePro.height);
}
namets({
    fname:"Anjani",
    lname:"pandit",
    age:66,
    height:7
})


//there is same problem of type property so we have to use inline Annotation
let nametsname=(namePro: {fname:string, lname:string, age:number, height:number})=>{
    console.log(namePro.fname);
    console.log(namePro.lname);
    console.log(namePro.age);
    console.log(namePro.height);
}
nametsname({
    //fname:55
    fname:"Anjani",
    lname:"pandit",
    age:66,
    height:7
})


//use of interface  (first letter must be capital)
interface Namepro{
    fname:string,
    lname:string, 
    age:number, 
    height:number
}

let typename=(namePro:Namepro)=>{
    console.log(namePro.fname+" "+namePro.lname);
    console.log(namePro.age);
    console.log(namePro.height);
}
typename({
    fname:"Anjani",
    lname:"pandit",
    age:66,
    height:7
})