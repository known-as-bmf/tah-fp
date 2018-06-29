const _ = require('../helpers');

// ? effectuer plusieurs operations sur une collection
const arr = [4, 6, 8];

// ? chainage
const chaining = arr
  .map(i => i + 5)
  .map(i => i * 2)
  .filter(i => i <= 25);
// ! tout n'est pas faisable
// ! sans wrapper la collection ou etendre le prototype

// ? imbrication d'appels
const classic = _.filter(i => i <= 25,
  _.map(i => i * 2,
    _.map(i => i + 5,
      arr
    )
  )
);
// ! dur à lire a partir de 2 niveaux d'imbrication

// ? la composition en mathématiques
// ? f(g(x)) === compose(f, g)(x)
// ? f(g(x)) === pipe(g, f)(x)

// ? composition de fonction partielles
// ? elles prennent 1 argument
const pipeFn = _.pipe(
  _.map(i => i + 5),
  _.map(i => i * 2),
  _.filter(i => i <= 25)
);
const piped = pipeFn(arr);

// ? les _.map utilisés dans la façon "classique"
// ? et la façon "composée" sont la même fonction !!!
// ? currying = 😍

// ? la fonction pipeFn est réutilisable !!

console.log('chaining', chaining);
console.log('classic', classic);
console.log('piped', piped);
