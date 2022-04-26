"use strict";
fn(76);
function fn(a) {
    if (typeof (a === 'string')) {
        return true;
    }
    else if (typeof (a === 'number')) {
        return false;
    }
    else {
        return false;
    }
}
function raiseError(msg) {
    console.log("Anjani");
    throw new Error(msg);
    console.log("Anjani");
}
raiseError("Anjani");
console.log("object");
