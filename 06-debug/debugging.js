const _ = require('../helpers');

// ? compliqué de comprendre ce qui se passe en cas d'erreur

// var dasherize = _.compose(
//   _.join('-'),
//   _.lower,
//   _.split(' '),
//   _.replace(/\s{2,}/gi, ' '),
//   _.replace(/[^\w\-]+/g, '')
// );

var dasherize = _.compose(
  _.join('-'),
  _.lower,
  _.tap(console.log),
  _.split(' '),
  _.replace(/\s{2,}/gi, ' '),
  _.replace(/[^\w\s]+/g, '')
);

// dasherize :: String -> String
// var dasherize = _.compose(
//   _.join('-'),
//   _.map(_.lower),
//   _.split(' '),
//   _.replace(/\s{2,}/gi, ' '),
//   _.replace(/[^\w\-]+/g, '')
// );

console.log(dasherize('Willst du bis der Tod uns scheidet Treue sein für alle Tage'));
