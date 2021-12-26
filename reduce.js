// var object = { 'a': 1, 'b': '2', 'c': 3 };
// => { 'b': '2' }

// function omit (obj, keyArr) {
//   let result ={}

//   for (key in obj) {
//     if (!keyArr.includes(key))  {
//       result[key] = obj[key]
//     }
//   }
//   return result;
// }


// const omit = (obj, keyArr) => Object.keys(obj).reduce((result, item) => !keyArr.includes(item) ? { ...result, [item]: obj[item]} : {...result}, {})


// console.log(omit(object, ['a', 'c']))



// const array = [1, 1, 2, 3, 2, 4, 4, 7, 8, 7]

// const withoutDublicate = (arr) => {
//   return arr.reduce((acc, el, i, arr) => {
//     !acc.includes(el) ? acc.push(el) :
//     acc.splice(acc.indexOf(el), 1);
//     arr.splice(arr.indexOf(el), 1);
//   } ,[])
// }

// console.log(withoutDublicate(array))



