// ? pas d'effets de bords
// ? elle ne travaille que sur ses arguments et variables locales
// ? même entrée = même résultat

function isEven(number) {
  return number % 2 == 0;
}

for (var i = 0; i < 10; i++) {
  console.log(i, '->', isEven(i) == isEven(i));
}

// ? transparence référentielle
// ? une fonction pure assure que si on remplace son
// ? appel par son resultat, le comportement reste le même
