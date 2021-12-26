//====================================================

// Find max
// const songs = [
//   {
//     title: 'Song1',
//     duration: 100
//   },
//   {
//     title: 'Song2',
//     duration: 55
//   },
//   {
//     title: 'Song3',
//     duration: 62
//   },
//   {
//     title: 'Song4',
//     duration: 69
//   }
// ];

// const duration = (el) => el.duration;

// const findMax = (arr) => arr.sort((a, b) => duration(b) - duration(a))[0].title; // Song1

// console.log(findMax(songs));


//===============================================

// Unique collection

// const collection = [{ id: 1 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 2 }];

// const uniqueCollection = (a) => [...new Set(a.map(el => el.id))].map(i => collection.find(el => el.id === i));

// console.log(uniqueCollection(collection)); // [{ id: 1 }, { id: 2 }, { id: 3 }]

//=============================================

// Create object by value

const arr = [
  { age:20, name:"Peter" },
  { age:30, name:"Mike" }, 
  { age:20, name:"Bahdan" }
];

const groupBy = (arr, key) => [...new Set(arr.map(el => el[key]))].reduce((res, v) => ({ ...res, [v]: arr.filter(el => el[key] === v)}) ,{})

// const groupBy = (arr, key) => [...new Set(arr.map(el => el[key]))].reduce((res, v) => { 
//   return {
//     ...res,
//     [v]: arr.filter(el => el[key] === v)
//   }
// },{})

console.log(groupBy(arr, 'age'))