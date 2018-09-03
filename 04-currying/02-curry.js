const R = require('ramda');

// ? le principe ?
// ? pouvoir utiliser une fonction de manière partielle

// ? currying simple "à la main"
const add = a => b => a + b;

const addTen = add(10);

console.log(addTen(2));
console.log(add(2)(2));

// ? on reprend l'exemple précédent
const arr = [2, 4, 6, 8];
const mapArr = arr
  .map(add(10))
  .map(add(20))
  .map(add(50));

console.log(mapArr);

// ? currying un peu plus complexe
function add(a, b) {
  if (R.isNil(b)) {
    return add.bind(null, a);
  }
  return a + b;
}

const addTen = add(10);

console.log(add(10, 24));
console.log(add(10)(24));
console.log(addTen(24));
