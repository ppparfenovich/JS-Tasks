// ========== Method invocation ===================

const object = {
  message: 'Hello, World!',
  getMessage() {
    const message = 'Hello, Earth!';
    return this.message;
  }
};
console.log(object.getMessage());   // Hello, World!

// ========== Arrow function ======================

function Pet(name) {
  this.name = name;
  this.getName = () => this.name;
}
const cat = new Pet('Fluffy');
console.log(cat.getName());   // Fluffy
const { getName } = cat;
console.log(getName());       // Fluffy

// ========= Function invocation =================

const object2 = {
  message: 'Hello, World!',
  logMessage() {
    console.log(this.message); // undefined
  }
};
setTimeout(object2.logMessage, 1000);    // window.message - undefined

//  ========== Arrow method =====================

const object3 = {
  who: 'World',
  greet() {
    return `Hello, ${this.who}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.who}!`;
  }
};
console.log(object3.greet());    // Hello, World!
console.log(object3.farewell()); // Goodbye, undefined


