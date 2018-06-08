const _ = require('../helpers');

const arr = _.times(i => ({ n: i, sq: i * i }), 10);

const target = arr.filter(obj => obj.n >= 5);
const target2 = arr.filter(obj => obj.n < 5);

console.log(arr);
console.log(target);
console.log(target2);
