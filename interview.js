const omit = (obj, keyArr) => Object.keys(obj).reduce((result, item) => !keyArr.includes(item) ? { ...result, [item]: obj[item]} : {...result}, {})

// const str = `Hello Bob,

// Thank you for reaching out to me and share your worries.
// We are sorry for the inconvenience caused.

// I’ve investigated the matter and find out that half of our development team was sick last week, that why we are failure to deliver the product on time. I think it would be good idea to spend extra working hours to finish the product. We already have a meeting and decided that our development team will work extra couple hours every day by the end of the week.  Also, I’ve asked help from testing team. They will prepare testing cases right await. I promise to fix all issues by the end of the week.

// Can you confirm that the offering timing is OK for you?

// Feel free to get back to me if you need anything else.
// Have a great day!

// Best regards,
// Pavel
// Team Lead

// `;

// console.log(str.split(' ').length);

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