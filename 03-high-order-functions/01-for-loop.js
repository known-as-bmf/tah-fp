const _ = require('../helpers');

// ? je veux filtrer une liste de manière immutable

const arr = _.times(i => ({ n: i, sq: i * i }), 10);

const target = [];
for (const obj of arr) {
  if (obj.n >= 5) {
    target.push(obj);
  }
}

console.log(arr);
console.log(target);
