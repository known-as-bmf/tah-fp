const _ = require('../helpers');

// ? je dois appliquer ce filtre plusieurs fois

const arr = _.times(i => ({ n: i, sq: i * i }), 10);

function filterList(l) {
  const target = [];
  for (const obj of l) {
    if (obj.n >= 5) {
      target.push(obj);
    }
  }
  return target;
}

const target = filterList(arr);
const target2 = filterList(arr);

console.log(arr);
console.log(target);
console.log(JSON.stringify(target) == JSON.stringify(target2));
