const sum = (a) => (b) => (c) => a + b + c;
const sum = (a) => (b) => a + sum(b);

let result = sum(1)(2)(3)

console.log(result)

