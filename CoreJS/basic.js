// ========== Types ===============================

// 1 - string
const str = "str";
console.log(typeof str); // "string"

// 2 - number
const num = 1;
const des = 12.345;
console.log(typeof num, typeof des); // "number"

// 3 - bigint
const big = 2n;
console.log(typeof big); // "bigint"

// 4 - boolean
const bool = true;
console.log(typeof bool); // "boolean"

// 5 - symbol
const symb = Symbol();
console.log(typeof symb); // "symbol"

// 6 - object
const obj = {};
console.log(typeof obj); // "object"

// 7 - null
const nul = null;
console.log(typeof nul); // "object"

// 8 - undefined
const undef = undefined;
console.log(typeof undef); // "undefined"

// ============ Variables =============================

var x = 5;

const change = () => {
  var x = 10;
  y = 2;
  console.log(x);
  console.log(window.x);
}
change();

console.log(x);
console.log(y);

for (var val = 0; val < 10; val++) {
  console.log(val);
  setTimeout(function() {
      console.log(`The number is ${val}`);
  }, 1000);
}

let i;
for (i = 0; i < 10; i++) {
  console.log(i);
  setTimeout(function() {
      console.log(`The number is ${i}`);
  }, 1000);
}
