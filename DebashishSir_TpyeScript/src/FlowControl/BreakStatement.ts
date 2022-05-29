for(let i=0; i<10; i++){
    if(i==6) break;
    console.log(i);
}

let num=0;
while (num < 6) {
    if (num === 3) {
      break;
    }
    num = num + 1;
  }
  console.log(num);

//Exapmple 1

let val1 = 20;
let val2 = 10;
let operation = '-';

console.log('switch example');

switch (operation) {
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
  default:
    console.log('Invalid operator');
}
console.log('switch finished');


//Example 2

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i == 6) break;
  }
}

outerloop: for (let i = 0; i < 10; i++) {
  innerloop: for (let j = 0; j < 10; j++) {
    if (i == 6) break outerloop;
  }
}

//Exaple 3 break inner
let count = 1;
outer: {
  inner: {
    console.log(count);

    break inner;

    count++;
    console.log(count);
  }

  count++;
  console.log(count);
}

console.log(count);

//Example 4 break Outer
let coun1 = 1;
outer: {
  inner: {
    console.log(coun1);

    break outer;

    coun1++;
    console.log(coun1);
  }

  coun1++;
  console.log(coun1);
}

console.log(coun1);

//Example 5
let z = 0;
blk1: {
  console.log(z);
  z++;
   break blk1;
   //break blk2; , A 'break' statement can only jump to a label of an enclosing statement.
}
blk2: {
  console.log(z);
}
console.log(z); //1

