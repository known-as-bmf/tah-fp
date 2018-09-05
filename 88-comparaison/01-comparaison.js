const R = require('ramda');
const _ = require('lodash');

// first from array items

const words = ['fp', 'is', 'awesome'];

function firstLetter1(words) {
  return _.map(words, word => _.first(word));
}

const firstLetter2 = R.map(R.head);

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
  return _.chain(members)
    .sortBy(member => _.get(member, 'yob'))
    .map(member => _.get(member, 'name'))
    .value();
}

const sortedNamesByAge2 = R.compose(
  R.map(R.prop('name')),
  R.sortBy(R.prop('yob'))
);

console.log(sortedNamesByAge1(metallica));
console.log(sortedNamesByAge2(metallica));
