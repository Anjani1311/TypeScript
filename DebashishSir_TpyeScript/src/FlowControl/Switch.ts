let Var1: number = 20;
let Var2: number = 10;
let operation3: string = '-';

console.log('switch example');

switch (operation3) {
  case '+':
    console.log(Var1 + Var2);
    break;
  case '-':
    console.log(Var1 - Var2);
    break;
  case '*':
    console.log(Var1 * Var2);
    break;
  case '/':
    console.log(Var1 / Var2);
    break;
  default:
    console.log('Invalid operator');
}

console.log('switch finished');

//Without break
let operation5 = '-';

console.log('switch example');

switch (operation5) {
  case '+':
    console.log(Var1 + Var2);
  case '-':
    console.log(Var1 - Var2);
  case '*':
    console.log(Var1 * Var2);
  case '/':
    console.log(Var1 / Var2);
  default:
    console.log('Invalid operator');
}

console.log('switch finished');

//Default Clause
let operation8 = '=';

console.log('switch example');

switch (operation8) {
  case '+':
    console.log(val1 + val2);
  case '-':
    console.log(val1 - val2);
  case '*':
    console.log(val1 * val2);
  case '/':
    console.log(val1 / val2);
  default:
    console.log('Invalid operator');
}

console.log('switch finished');



//Default Clause Location
let operation9 = '=';

console.log('switch example');

switch (operation9) {
  default:
    console.log('Invalid operator');
    break;
  case '+':
    console.log(val1 + val2);
    break;
  case '-':
    console.log(val1 - val2);
    break;
  case '*':
    console.log(val1 * val2);
    break;
  case '/':
    console.log(val1 / val2);
    break;
}

console.log('switch finished');
//breaks from a switch
let val: number = calculator(20, 10, '+');
console.log(val);

function calculator(val1: number, val2: number, operation: string) {
  switch (operation) {
    default:
      console.log('Invalid operator');
      return 0;
    case '+':
      return val1 + val2;
    case '-':
      return val1 - val2;
    case '*':
      return val1 * val2;
      break;
    case '/':
      return val1 / val2;
  }
}

//Grouping of Cases
let options3 = '1';

switch (options3) {
  case '1':
  case '2':
  case '3':
  case '4':
  case '5':
    console.log('<=5');
    break;
  case '6':
  case '7':
  case '8':
  case '9':
  case '10':
    console.log('>5 & <=10');
    break;
  default:
    console.log('Invalid');
}

//Strict Equality Check

let options6: any = 3;

switch (options6) {
  case '1':
    console.log('1');
    break;
  case '2':
    console.log('2');
    break;
  case '3':
    console.log('3');
    break;
  case '4':
    console.log('4');
    break;
  default:
    console.log('Invalid');
}

let options = 3;

/* switch (options) {
  case a:
    console.log('1');
    break;
  case a + 1:
    console.log('2');
    break;
  case b + 1:
    console.log('3');
    break;
  case b * b:
    console.log('4');
    break;
  default:
    console.log('Invalid');
}
 */


3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
 
enum VehcileType {
  Car1, //0
  Plane2, //1
  Train3 //2
}
 
let num8:VehcileType=VehcileType.Plane2
 
switch (+num8) {
  case VehcileType.Car1:
    console.log("Car");
    break;
  case VehcileType.Plane2:
    console.log("Plane");
    break;
  case VehcileType.Train3:
    console.log("Train");
    break;
  default:
    break;
}