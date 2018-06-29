const _ = require('../helpers');

// ? function taking function as argument

const arr = _.times(i => ({ n: i, sq: i * i }), 10);

const target = arr.filter(obj => obj.n >= 5);
const target2 = arr.filter(obj => obj.n < 5);

console.log(arr);
console.log(target);
console.log(target2);
