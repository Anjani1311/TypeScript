//Different Type    /Built-In
//Static  -------/
//Generic        /user-defined
//Decorators

//STATIC TYPE()
//1.Built-In
//Number Type  ---------->>>>1,4.5,1000000000000,4.2f
//String Type  ---------->>>>"Anjani", 'A'
//Boolean Type  --------->>>>1,0
//Null Type     ---------->>>>No memory Allocations
//Void Type     ---------->>>>Yes memory 

//Undefined
//Any 

//2.User-defined Type
//Array Type
//Class Type
//Touple Type
//Enum Type
//Interface Type
//Function Type
//Object Type


function Compare<T>(a:T,b:T):boolean{
    //<T> denotes As Type(InstanceType)
    return a==b;
}

let out1=Compare<string>("Anjani", "Resham")

let out2=Compare<number>(2, 2)

let out3=Compare<number>(2.3, 4.2)

let out4=Compare<any>("Anjani", "Resham")

let out5=Compare<any>("2", 23)


//Decorators
/* function f(){
    console.log('f():Evaluated');
    return function(
        target,
        propertyKey:string,
        desciptor:PropertyDescriptor
    ){
        console.log('f():Called')
    };
}
class C{
    @f()
    method(){}
} */

