// =========== Closures ===============

// const createPhrase = (greeting) => {
//   return (name) => `${greeting} ${name}!`
// };

const createPhrase = (greeting) => (name) => `${greeting} ${name}!`;

const sayHi = createPhrase('Hello');
const sayBye = createPhrase('Bye');
console.log(sayHi('Max'));
console.log(sayBye('John'));

// ============ Function types ===============

// Function declaration ================

function greet (who) {
  return `Hello ${who}`;
}

// Function expression ==================

const greet2 = function (who) {
  return `Hello ${who}`;
}

// Arrow Function ========================

const greet3 = (who) => `Hello ${who}`;

// 4 Ways to invoke regular function =====

// 1 - simple invocation =========

function myFunc() {
  console.log(this);
}

myFunc();

// 2 - method invocation =========

const myObj = {
  method() {
    console.log(this);
  }
}

myObj.method();

// 3 - Indirect invocation =======

function myFunc2() {
  console.log(this);
}

const myContext = { value: 'A' };

myFunc2.call(myContext);
myFunc2.apply(myContext);

// 4 - constructor invocation ======

function MyFunc() {
  console.log(this);
}

new MyFunc();



var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log(this.i, this);
  }
}
obj.b(); // prints undefined, Window {...} (или глобальный объект)
obj.c();
