export{}
//typescript is compiled and trasfer to javascript.

console.log("welcome to my site.....");

//let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.
// This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope
// var num=1;     var is scoped to the nearest function block
// let number=2;  scoped to the nearest block only...........

function Myfuntion(){
    for(var i=0; i<5; i++){
       console.log(i);
    }
    console.log("finally outside the box"+i);
}
Myfuntion();

function myfun(){
    for(let i=0; i<5; i++){
       console.log(i);
    }
    //console.log("finally outside the box"+i);
}
myfun();