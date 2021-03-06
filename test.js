//@ts-check
const _ = require('./helpers');

const arr = _.times(_.id, 20);

console.log(arr);
console.log(_.first(arr));
console.log(_.last(arr));
console.log(_.nth(2, arr));
console.log(_.start(arr));
console.log(_.end(arr));

const condPipe = _.map(
  _.pipe(
    _.doIf(_.gte(10), v => v * 10),
    _.doIf(_.lt(10), v => v * -1),
    _.doIfElse(
      _.gte(0),
      value => ({ value, positive: true }),
      value => ({ value, positive: false })
    )
  )
);

const condCompose = _.map(
  _.compose(
    _.doIf(_.gte(10), v => v * 10),
    _.doIf(_.lt(10), v => v * -1),
    _.get('value'),
    value => ({ value })
  )
);

console.log(condPipe(arr));
console.log(condCompose(arr));

const arr2 = [1, 2, undefined, 4, 5];

console.log(_.compact(arr2));

function lol(str) {
  console.log('lol', str);
}

_.wrap((fn, str) => {
  console.log('before');
  fn(str);
  console.log('after');
}, lol)('wrapped');
