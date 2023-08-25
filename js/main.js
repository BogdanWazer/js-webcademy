// {
//   let userName = "Bob"
//   console.log(userName);

//   var someNumber = 10; // глобальная область видимости
//   console.log(someNumber)
// }
// console.log(someNumber)

// Data-types

let userName = 'Mark';

let someName = 'James';
someName = null;

// Ternar operator

// if (10 < 12) {
// 	console.log('Verno');
// } else {
// 	console.log('Ne VERNO')
// }

// 10 < 12 ? console.log('verno') : console.log('neVerno');

// let greeting;
// let time = 14;

// if (10 < 12) {
// 	greeting = 'Good norning'
// } else {
// 	greeting = 'Good afternoon';
// }

// console.log(greeting)

// greeting = time < 12 ? 'Good morning' : 'Good Afternoon';

// console.log(greeting);

// Concatenation

let greeting = 'Hello, Mark!';
let howAreYou = 'How are you?';

let sayHi = greeting + howAreYou;
console.log(greeting + ' How are you?');

// shablonnie stroki

console.log(`${greeting} How are u?`);

console.log('Hello dear USER!');

// DRY = dont repeat yourself

// Function declaration!!

function sayhi() {
  console.log(`Hello there, dear ${userName}`);
}

sayhi();

// Function expression --

let saySome = function () {
  console.log('Function expression ');
};

saySome();

// Previous call

saySomething();

function saySomething() {
  console.log('saySomething');
}

// Better to use function declaration


// Parameters and arguments for functions

function someSayHiFunction(name) {
  console.log(`Hello, ${name}! How are u?`);
}
someSayHiFunction('Yurij')

