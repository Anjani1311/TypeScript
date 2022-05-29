let list1:number[]=[1,2,3];
console.log('List:',list1.length);


let list2: Array<Number>=[1,2,3];
//console.log('List2:',list2.map((e)=>e*2));


let Skils:string[]=['Anjani'];
Skils[0]="Anjani";
Skils[1]="pandit";
Skils[2]="ayat";

Skils.push("Anjani")
console.log("Skills:",Skils);

Skils.pop();
console.log("Skills:",Skils);

let fruits:Array<string>;
fruits=['Apple', 'Orange', 'Banana'];
fruits.push('Mango');
console.log("Fruits List:",fruits);

let ids:Array<number>;
ids=[2,4,1,3];
console.log("ids List:",ids);

let values:(number|string)[]=['Anjani','Resham',3,'Tanu'];
let value:Array<number|string>=[
    'Anjani','Resham',3,'Tanu'
]


//Accessing Arrays elemets using Loop
for(var index in fruits){
    console.log(fruits[index]);
}

for(var i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

fruits.sort();
console.log(fruits);

console.log(fruits.pop());
fruits.push('Papaya');
console.log(fruits);

fruits=fruits.concat(['fig ','Mango2'])
console.log(fruits);

console.log(fruits.indexOf('Mango'));