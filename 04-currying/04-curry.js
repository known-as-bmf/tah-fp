const _ = require('../helpers');

const replaceVoyelle = _.replace(/[aeiou]/gi);
const replaceVoyelleWithStar = replaceVoyelle('*');

const crunchSpaces = _.replace(/\s\s+/g, ' ');

console.log(replaceVoyelleWithStar('Elle est où la poulette ?'));
console.log(crunchSpaces(replaceVoyelle('', 'Le petit oiseau a pris sa volée')));
