const _ = require('../helpers');

const arr = _.times(i => ({ n: i, sq: i * i }), 10);

function filterList(l, fn) {
  const target = [];
  for (const obj of l) {
    if (fn(obj)) {
      target.push(obj);
    }
  }
  return target;
}

const target = filterList(arr, obj => obj.n >= 5);
const target2 = filterList(arr, obj => obj.n < 5);

console.log(arr);
console.log(target);
console.log(target2);
