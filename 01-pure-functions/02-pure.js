// ? pas d'effets de bords
// ? elle ne travaille que sur ses arguments et variables locales
// ? même entrée = même résultat (idempotente)

function isEven(number) {
  return number % 2 == 0;
}

for (let i = 0; i < 10; i++) {
  console.log(i, '->', isEven(i) == isEven(i));
}

// ? une fontion pure depends uniquement de ses paramètres

// ? transparence référentielle
// ? une fonction pure assure que si on remplace son
// ? appel par son resultat, le comportement reste le même

// ? pas de problème d'accès conccurentiel car pas de "shared state"

const arr = [0, 1, 2];

function sum() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sum(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}
