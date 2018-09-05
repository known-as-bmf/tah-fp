const R = require('ramda');

// ? peut servir d'optimisation dans certains cas
const arr = [4, 6, 8];

// pipeFn :: List Int -> List Int
const pipeFn = R.pipe(
  R.map(i => i + 5),
  R.map(i => i * 2)
);

// optimFn :: List Int -> List Int
const optimFn = R.map(
  R.pipe(
    i => i + 5,
    i => i * 2
  )
);

const piped = pipeFn(arr); // ? deux parcours
const optim = optimFn(arr); // ? un seul parcours

console.log(piped);
console.log(optim);
