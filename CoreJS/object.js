// =========== Create =================

const obj = {};
const obj1 = new Object();
const obj2 = Object.create(null); // Create object - Object.create(proto[, propertiesObject])
const obj3= Object.assign({});    // Copy object - Object.assign(target, ...sources)

// console.log(obj, obj1, obj2, obj3);

// =========== Methods ====================

const obj4 = {
  name: 'Pavel',
  password: 'Password',
  email: 'email'
};

const obj5 = Object.assign(obj4, { job: 'Developer' });
const objKeys = Object.keys(obj5);        // Return Array objects key
const objValues = Object.values(obj5);        // Return Array objects value
const objEntries = Object.entries(obj5);
const map = new Map(Object.entries(obj5));    // Преобразование объекта в Map
const obj6 = Object.fromEntries(map);

let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук",    50]
]);

console.log(obj6);
// console.log(recipeMap);


// =========== Description ================

const person1 = {
  name: "Pavel",
  birthYear: 1982
}

const person = Object.create(
  {
    job: 'Developer'
  }, 
  {
  name: {
    value: 'Pavel',
    enumerable: true,     // name works in : Object.assign(), spread, for ... in, Object.keys()
    writable: true,       // name can be reassigned
    configurable: true,   // name can be deleted
  }, 
  birthYear: {
    value: 1982,
    enumerable: false,
    writable: false,
    configurable: false,
  },
  age: {
    get() {
      return new Date().getFullYear() - this.birthYear;
    },
    set(value) {
      document.body.style.background = 'red';
      console.log('Set age ', value);
    }
  }
});

// console.log(person);
// person.name = "Max";

// for (let key in person) {
//   console.log(key, person[key]);
//   if (person.hasOwnProperty(key)) {
//     console.log('Object key ', key);
//   }
// };