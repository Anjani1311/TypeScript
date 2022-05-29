let empId1: number = 1;
let empName1: string = 'Sagnik';

let employee1: [number, string] = [empId1, empName1];

let employee2:number|string=2;

//RGB
let Color1: [number, number, number] = [255, 0, 0];

//optional parameter [?]/nullcullising operator
let BGCOLOR1, HEADERCOLOR1: [number, number, number, number?];

BGCOLOR1 = [0, 255, 255, 0.5];

HEADERCOLOR1 = [0, 255,0];

//Tuple Array
let emp1: [number, string][];
emp1 = [
  [11, 'Sourav'],
  [200000, 'RUP'],
  [3.5, 'SAGNIK'],
  [47, 'Aranb'],
  [5, 'Tan'],
];

console.log(emp1[2][1]);