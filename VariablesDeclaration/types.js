//typescript is compiled and trasfer to javascript.
console.log("welcome to my site.....");
// var num=1;     var is scoped to the nearest function block
// let number=2;  scoped to the nearest block only...........
function Myfuntion() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("finally outside the box" + i);
}
Myfuntion();
function myfun() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("finally outside the box" + i);
}
myfun();
