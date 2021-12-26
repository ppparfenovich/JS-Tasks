// ============= Create ======================

const arr = [];
const arr1 = new Array();
const arr2 = Array();
const arr3 = Array.of();
const arr4 = Array.from([1, 2, 3], x => x + x);
const arr5 = [...arr];
const arrArrow = (...rest) => rest;

// console.log(arr, arr1, arr2, arr3, arr4, arr5, arrArrow(1));

// ============= Methods =======================

const arrMet = [1, 2, 3, 3, 5, 7, 85, 4];

// ============ Iteration ==========

// arrMet.forEach((el, i, arr) => {
//   console.log(el, i, arr)
// });

const arrMap = arrMet.map((el, i) => el + i);
const arrFilter = arrMet.filter((_, i) => i % 2 ===0);
const arrReduce = arrMet.reduce((acc, el, i) => ({ ...acc, [i]:  el }), {});

// .find(), .findIndex(), .some(), .every()

// ============== Change base Array ===========================

// .push(), .pop(), .unshift(), .shift(), .reverse(), .fill()

const arrSort = arrMet.sort((a, b) => a - b);
const arrSplice = arrMet.splice(2, 1, 100);


console.log(arrMet);
console.log(arrSplice);

// ============= Other ==================

// .concat(), .includes(), .slice(), .join(), .flat()

