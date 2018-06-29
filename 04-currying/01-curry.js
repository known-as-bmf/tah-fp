// ? une fonction classique
function add(a, b) {
  return a + b;
}

// ? on veut pouvoir "pré-remplir" un argument
function addTen(b) {
  return add(10, b);
}

console.log(add(10, 24));
console.log(addTen(24));

// ? et si on a besoin de "addTwenty", "addFifty"... ?

function addTwenty(b) {
  return add(20, b);
}

function addFifty(b) {
  return add(50, b);
}

const arr = [2, 4, 6, 8];
const mapArr = arr
  .map(addTen)
  .map(addTwenty)
  .map(addFifty);

console.log(arr);
console.log(mapArr);
