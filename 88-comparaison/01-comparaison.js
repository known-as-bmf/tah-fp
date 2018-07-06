const _ = require('../helpers');
const l = require('lodash');

// first from array items

const words = ['fp', 'is', 'awesome'];

function firstLetter1(words) {
  return l.map(words, word => l.first(word));
}

const firstLetter2 = _.map(_.first);

console.log(firstLetter1(words));
console.log(firstLetter2(words));

// pick and sort

const metallica = [
  { name: 'James', yob: 1963 },
  { name: 'Kirk', yob: 1962 },
  { name: 'Robert', yob: 1964 },
  { name: 'Lars', yob: 1963 },
  { name: 'Cliff', yob: 1962 },
  { name: 'Dave', yob: 1961 }
];

function sortedNamesByAge1(members) {
  return l
    .chain(members)
    .sortBy(member => l.get(member, 'yob'))
    .map(member => l.get(member, 'name'))
    .value();
}

const sortedNamesByAge2 = _.compose(
  _.map(_.get('name')),
  _.sortBy(_.get('yob'))
);

console.log(sortedNamesByAge1(metallica));
console.log(sortedNamesByAge2(metallica));
