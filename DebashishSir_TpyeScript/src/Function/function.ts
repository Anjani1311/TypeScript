//Named Functions
function display() {
    console.log('Hello TypeScript!');
  }
  
  display(); //Output: Hello TypeScript
  
  function Sum4(x: number, y: number): number {
    return x + y;
  }
  
  Sum4(2, 3); // returns 5
  
  //Anonymous Function
  
  let greeting = function () {
    console.log('Hello TypeScript!');
  };
  
  greeting(); //Output: Hello TypeScript!
  

  //Function Parameters
  
  function Greet2(greeting: string, name: string): string {
    return greeting + ' ' + name + '!';
  }
  
  Greet2('Hello', 'Steve'); //OK, returns "Hello Steve!"
  //Greet2('Hi'); // Compiler Error: Expected 2 arguments, but got 1.
  //Greet('Hi', 'Bill', 'Gates'); //Compiler Error: Expected 2 arguments, but got 3.
  
  //Optional Parameters
  function Greet1(greeting: string, name?: string): string {
    return greeting + ' ' + name + '!';
  }
  
  Greet1('Hello', 'Steve'); //OK, returns "Hello Steve!"
  Greet1('Hi'); // OK, returns "Hi undefined!".
  //Greet1('Hi', 'Bill', 'Gates'); //Compiler Error: Expected 2 arguments, but got 3.
  
  //Default Parameters
  function Greet3(name: string, greeting: string = 'Hello'): string {
    return greeting + ' ' + name + '!';
  }
  
  Greet3('Steve'); //OK, returns "Hello Steve!"
  Greet3('Steve', 'Hi'); // OK, returns "Hi Steve!".
  Greet3('Bill'); //OK, returns "Hello Bill!"
  
  //Function Callings
  
  function Greet(greeting: string = 'Hello', name: string): string {
    return greeting + ' ' + name + '!';
  }
  
  Greet(undefined, 'Steve'); //returns "Hello Steve!"
  Greet('Hi', 'Steve'); //returns "Hi Steve!".
  Greet(undefined, 'Bill'); //returns "Hello Bill!"