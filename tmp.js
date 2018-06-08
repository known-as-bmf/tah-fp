const _ = require('../helpers');

const arr = _.times(x => x, 10);
const test = _.pipe(
  _.filter(x => x >= 5),
  _.map(x => x * x)
)(arr);

console.log(arr);
console.log(test);
