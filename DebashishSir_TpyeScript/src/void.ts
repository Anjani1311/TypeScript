//where string is parameter datatype and void is return type
function log(msg:string):number{
    console.log(msg);
    return 7;
}
function log1(msg:string):void{
    console.log(msg);
}
function log2(msg:string):any{
    console.log(msg);
    return 7;
}
log("Anjani")

let useless:void=undefined;
//useless=1;
console.log(useless);