const _ = require('../helpers');

// ? composition de composition 😎

const pipe1 = _.pipe(
  _.filter(x => x >= 5),
  _.map(x => x * x)
);

const pipe2 = _.pipe(
  pipe1,
  _.first
);

const arr = [2, 3, 4, 5, 6, 7, 8];
console.log(pipe1(arr));
console.log(pipe2(arr));
