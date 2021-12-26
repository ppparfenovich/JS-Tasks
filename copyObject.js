const copyObj = (obj) => {
  const res = {};
  for (const k in obj) {
    const v = obj[k];
    res[k] = (typeof v === 'object') ? copyObj(v) : v;
  }
}
