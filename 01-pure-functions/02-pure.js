const _ = require('../helpers');

// ? pas d'effets de bords
// ? elle ne travaille que sur ses arguments et variables locales
// ? même entrée = même résultat

function isEven(number) {
  return number % 2 == 0;
}

_.times(i => console.log(i, '->', isEven(i) == isEven(i)), 10);

// ? transparence référentielle
// ? une fonction pure assure que si on remplace son
// ? appel par son resultat, le comportement reste le même
