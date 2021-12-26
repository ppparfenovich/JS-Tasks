function length(str) {
  return str.length === 1 ? 1 : 1 + length(str.substr(1))
}

console.log(length('shipment')) // 8

const factorial = (n) => n === 1 ? 1 : n * factorial(n-1);

console.log(factorial(5))

function isPalindrome(str) {
  return str.length < 2 ? true : str[0] === str[str.length -1] ? isPalindrome(str.slice(1, - 1)) : false
}

console.log(isPalindrome("abbabbaaba"))