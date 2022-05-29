function Greet5(greeting: string, ...names: string[]) {
    return greeting + ' ' + names.join(', ') + '!';
  }
  console.log(Greet5('Hello', 'Steve', 'Bill','Anjani'));
  Greet5('Hello', 'Steve', 'Bill','Anjani'); // returns "Hello Steve, Bill!"
  
  Greet5('Hello'); // returns "Hello !"
  
  let Greet6 = (greeting: string, ...names: string[]) => {
    return greeting + ' ' + names.join(', ') + '!';
  };
  
  Greet6('Hello', 'Steve', 'Bill'); // returns "Hello Steve, Bill!"
  
  Greet6('Hello'); // returns "Hello !"
  

  //A rest parameter must be last in a parameter list.
  /* function Greet(...names: string[], greeting: string) {
    // Compiler Error
    return greeting + ' ' + names.join(', ') + '!';
  } */

  function Greet( greeting: string,...names: string[]) {
    // Compiler Error
    return greeting + ' ' + names.join(', ') + '!';
  }