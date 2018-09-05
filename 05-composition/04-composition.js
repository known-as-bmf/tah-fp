const R = require('ramda');

// ? composition de compositions 😎
// pipe1 :: List Int -> List Int
const pipe1 = R.pipe(
  R.filter(x => x >= 5),
  R.map(x => x * x)
);
// pipe2 :: List Int -> Int
const pipe2 = R.pipe(
  pipe1,
  R.head
);
// pipe3 :: List Int -> String
const pipe3 = R.pipe(
  pipe2,
  v => v * 2 - 8,
  v => 'Pipes are fun ❤ Here is proof => ' + v
);

const arr = [2, 3, 4, 5, 6, 7, 8];
console.log(pipe1(arr));
console.log(pipe2(arr));
console.log(pipe3(arr));


// ? composition créée une fonction à partir de fonctions
// ? extrêmement haut niveau
// ? mathematiques !
