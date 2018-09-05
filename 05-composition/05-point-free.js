const R = require('ramda');

// ? pointfree => on a plus d'arguments... tout est declaratif et générique
// pow :: Int -> Int -> Int
const pow = R.curry((a, b) => Math.pow(b, a));
// prepend :: String -> String -> String
const prepend = R.curry((a, b) => a + b);
// gte :: Int -> Bool
const gte = R.flip(R.gte);
// subtract :: Int -> Int
const subtract = R.flip(R.subtract);

// pipe1 :: List Int -> List Int
const pipe1 = R.pipe(
  R.filter(gte(5)),
  R.map(pow(2))
);

// pipe2 :: List Int -> Int
const pipe2 = R.pipe(
  pipe1,
  R.head
);

// pipe3 :: List Int -> String
const pipe3 = R.pipe(
  pipe2,
  R.compose(subtract(8), R.multiply(2)),
  prepend('Pipes are fun ❤ Here is proof => ')
);

const arr = [2, 3, 4, 5, 6, 7, 8];
console.log(pipe1(arr));
console.log(pipe2(arr));
console.log(pipe3(arr));

// ! peut parfois obfusquer l'intention du code
