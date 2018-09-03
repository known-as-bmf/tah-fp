const R = require('ramda');

// ? effectuer plusieurs operations sur une collection
const arr = [4, 6, 8];

// ? chainage
const chaining = arr
  .map(i => i + 5)
  .map(i => i * 2)
  .filter(i => i <= 25)
  .join(' ');

console.log('chaining', chaining);
// ! tout n'est pas faisable
// ! sans wrapper la collection ou etendre le prototype

// ? imbrication d'appels
const classic = R.join(
  ' ',
  R.filter(
    i => i <= 25,
    R.map(
      i => i * 2,
      R.map(i => i + 5, arr)
    )
  )
);

console.log('classic', classic);
// ! dur à lire a partir de 2 niveaux d'imbrication

// ? la composition en mathématiques
// ? f(g(x)) === compose(f, g)(x)
// ? f(g(x)) === pipe(g, f)(x)

// ? composition de fonction partielles
// ? elles prennent 1 argument
// pipeFn :: List Int -> List Int
const pipeFn = R.pipe(
  R.map(i => i + 5),
  R.map(i => i * 2),
  R.filter(i => i <= 25),
  R.join(' ')
);
const piped = pipeFn(arr);

console.log('piped', piped);
// ? les R.map utilisés dans la façon "classique"
// ? et la façon "composée" sont la même fonction !!!
// ? currying = 😍

// ? la fonction pipeFn est réutilisable !!
