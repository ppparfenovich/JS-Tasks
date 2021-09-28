const object = { 'c': { 'python': { 'java': 3 } } };


const getLodash = (obj, template, defaultValue) => {
  const tArr = Array.isArray(template) ? template : template.split('.');

  for (let i = 0; i < tArr.length; ) {
    obj = obj?.[tArr[i++]] ?? defaultValue
  }

  return obj 
}


console.log(getLodash(object, 'c.python.java', 88))
// console.log(getLodash(object, ['c', '0' 'python', 'java'], 88))