// ? une fonction classique
function add(a, b) {
  return a + b;
}

// ? on veut pouvoir "pré-remplir" un argument
const arr = [1, 2, 3, 2, 4, 6, 5, 8];

arr.map(b => add(10, b));

function addTen(b) {
  return add(10, b);
}

arr.map(addTen);

// ? et si on a besoin de "addTwenty", "addFifty"... ?

function addTwenty(b) {
  return add(20, b);
}

function addFifty(b) {
  return add(50, b);
}

arr
  .map(addTen)
  .map(addTwenty)
  .map(addFifty);
