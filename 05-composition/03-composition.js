const _ = require('../helpers');

// ? peut servir d'optimisation dans certains cas
const arr = [4, 6, 8];

// pipeFn :: List Int -> List Int
const pipeFn = _.pipe(
  _.map(i => i + 5),
  _.map(i => i * 2)
);

// optimFn :: List Int -> List Int
const optimFn = _.map(
  _.pipe(
    i => i + 5,
    i => i * 2
  )
);

const piped = pipeFn(arr); // ? deux parcours
const optim = optimFn(arr); // ? un seul parcours

console.log(piped);
console.log(optim);
