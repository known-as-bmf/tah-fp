// ? le principe ?
// ? pouvoir utiliser une fonction de manière partielle

// ? currying "à la main"
function add(a, b) {
  if (_.isNil(b)) {
    return add.bind(null, a);
  }
  return a + b;
}

const addTen = add(10);

console.log(add(10, 24));
console.log(add(10)(24));
console.log(addTen(24));

// ? on reprends l'exemple précédent
const arr = [2, 4, 6, 8];
const mapArr = arr
  .map(add(10))
  .map(add(20))
  .map(add(50));

console.log(arr);
console.log(mapArr);
