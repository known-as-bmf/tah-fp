const _ = require('../helpers');

// ? pointfree => on a plus d'arguments... tout est declaratif et générique

// pipe1 :: List Int -> List Int
const pipe1 = _.pipe(
  _.filter(_.gte(5)),
  _.map(_.pow(2))
);

// pipe2 :: List Int -> Int
const pipe2 = _.pipe(
  pipe1,
  _.first
);

// pipe3 :: List Int -> String
const pipe3 = _.pipe(
  pipe2,
  _.compose(_.sub(8), _.mult(2)),
  _.prepend('Pipes are fun ❤ Here is proof => ')
);

const arr = [2, 3, 4, 5, 6, 7, 8];
console.log(pipe1(arr));
console.log(pipe2(arr));
console.log(pipe3(arr));

// ! peut parfois obfusquer l'intention du code
