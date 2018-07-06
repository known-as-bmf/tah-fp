// ? pouvoir le faire sur n'importe quelle arité
function curry(fn, arity, ...args) {
  if (arity <= args.length) {
    return fn(...args);
  }
  return curry.bind(null, fn, arity, ...args);
}

function ektipepipapa(a, b, c) {
  console.log(a, b, c);
}

const kapoué = curry(ektipepipapa, 3);

const h = 'Hello';
const w = 'World';
const m = 'Max Kreager';

kapoué(h, w, m);
kapoué(h)(w, m);
kapoué(h, w)(m);
kapoué(h)(w)(m);

// ? une fonction curryed retourne une nouvelle fonction
// ? a chaque fois qu'elle est appellée, jusqu'a ce qu'on
// ? lui ai passé tout ses arguments.
