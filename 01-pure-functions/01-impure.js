// ! effets de bords
// ! non déterministe

let string = 'initial';

function prepend(text) {
  string = text + string;
  return string;
}

console.log(prepend('lol'));
console.log(prepend('lol'));
