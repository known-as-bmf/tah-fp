const R = require('ramda');

// ? compliqué de comprendre ce qui se passe en cas d'erreur

// dasherize :: String -> String
// var dasherize = R.compose(
//   R.join('-'),
//   R.toLower,
//   R.split(' '),
//   R.replace(/\s{2,}/gi, ' '),
//   R.replace(/[^\w\-]+/g, '')
// );

// dasherize :: String -> String
var dasherize = R.compose(
  R.join('-'),
  R.toLower,
  R.tap(console.log),
  R.split(' '),
  R.replace(/\s{2,}/gi, ' '),
  R.replace(/[^\w\s]+/g, '')
);

// dasherize :: String -> String
// var dasherize = R.compose(
//   R.join('-'),
//   R.map(R.toLower),
//   R.split(' '),
//   R.replace(/\s{2,}/gi, ' '),
//   R.replace(/[^\w\-]+/g, '')
// );

console.log(dasherize('Willst du bis der Tod uns scheidet Treue sein für alle Tage'));
