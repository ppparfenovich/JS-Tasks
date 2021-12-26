const omit = (obj, keyArr) => Object.keys(obj).reduce((result, item) => !keyArr.includes(item) ? { ...result, [item]: obj[item]} : {...result}, {})

const str = `Hi Max, 
I just wanted to ask you for a favor, my friend. 
Recently, I’ve attended a few networking events, and my boss has asked me to give a presentation about it to my colleagues. I know you as an excellent presenter, and I need your help. 
I’ve attached my presentation’s slides. 
Please, let me know if you have any recommendations for my presentation. 
Thanks. 
Pavel`;

console.log(str.split(' ').length);

console.log('a');
const prom = new Promise((resolve) => {
  console.log('b');
  resolve('c')
})
setTimeout(() => {
  console.log('d');
}, 0)
prom.then(result => console.log(result))
console.log('e');