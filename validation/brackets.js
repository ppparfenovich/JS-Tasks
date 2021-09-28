// Validation of parentheses
const str1 = '({})([])';
const str2 = '{asd}';
const str3 = '{()}{]}';

const validator = (str) => {
  const bracketsObj = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  }

  let test = [];

  const bracketsKeys = Object.keys(bracketsObj)
  const bracketsValues = Object.values(bracketsObj)

  for (let i = 0; i < str.length; i++) {
    if (!bracketsKeys.includes(str[i]) && !bracketsValues.includes(str[i])) continue;
    
    if (bracketsKeys.includes(str[i])) {
      test.push(str[i])
    } else if (bracketsObj[test[test.length - 1]] === str[i] ) {
      test.pop()
    } else {
      return false
    }
  }
  if (test.length === 0) {
    return true
  } 
};

console.log(validator(str1)); // true
console.log(validator(str2)); // true
console.log(validator(str3)); // false