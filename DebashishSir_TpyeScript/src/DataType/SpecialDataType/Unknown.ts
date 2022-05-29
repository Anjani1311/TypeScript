export{}
//unknown type means that the type of variable is not known. 
//It is the type-safe counterpart of any. /
//We can assign anything to an unknown variable, but the unknown isn’t assignable to any other types except to unknown and any. 
//To use an unknown type, we need to first assert its type or narrow it to a more specific type.
//unknown Type
let unknownVar: unknown;

unknownVar = true; //boolean
unknownVar = 10; //number
unknownVar = 10n; //BigInt  >>=ES2020
unknownVar = 'Hello World'; //String
unknownVar = ['1', '2', '3', '4']; //Array
unknownVar = { firstName: '', lastName: '' }; // Object
unknownVar = null; // null
unknownVar = undefined; // undefined
unknownVar = Symbol('key'); // Symbol

let Unvalue: unknown;

let valuex: unknown = Unvalue; // OK
let valuey: any = Unvalue; // OK


/* value1: boolean = Unvalue; // Error
value2: number = Unvalue; // Error
let value3: string = Unvalue; // Error
let value4: object = Unvalue; // Error
let value5: any[] = Unvalue; // Error
let value6: Function = Unvalue; // Error
 */


/* value1: boolean = Unvalue as boolean; // OK
value2: number = Unvalue as number; // OK
value3: string = Unvalue as string; // OK
value4: object = Unvalue as object; // OK
value5: any[] = Unvalue as any; // OK
value6: Function = Unvalue as Function; // OK

 */
//Type Assertion
 
let value12: unknown;
 
let value1: boolean = value12 as boolean;   // OK
let value2: number = value12 as number;     // OK
let value3: string = value12 as string;     // OK
let value4: object = value12 as object;     // OK
let value5: any[] = value12 as any;         // OK
let value6: Function = value12 as Function; // OK


//Narrowing the unknown Type

let value: unknown;
 
if (typeof value =="boolean") {
    let value1: boolean = value;   // OK
}
if (typeof value =="number") {
    let value1: number = value;   // OK
}
if (typeof value =="string") {
    let value1: string = value;   // OK
}
 
//Unknown Vs Any