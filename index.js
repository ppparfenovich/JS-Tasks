
//===============================================
// Remove symbols from string
// const string = 'Song_1._Demo.mp3';

// const removeSymbols = (str) => str.split('.').filter((_, i) => i !== 1).join('.');

// console.log(removeSymbols(string)); // Song_1.mp3

// ===============================================
// Validate email
// const email = 'example33@mail.com';

// const validateEmail = (email) => /\S@\S+\.\S/.test(email);

// console.log(validateEmail(email)); // true

//========================================================

// function f (a) {
//   return function (b) {
//     return a + b;
//   }
// }

// const addTen = f(10)

// console.log(addTen(25))

// function f() {
//   let count = 0;
//   return function() {
//     return count++
//   }
// }

// const count1 = f()
// count1()
// count1()
// count1()
// console.log(count1())
// const count2 = f()
// console.log(count2())

//=======================================================

const find = str => {
  const matched = str.match(/[aeiou]/g)
  return matched ? matched.length : 0
}

console.log(find('ahfeeuncd'))
