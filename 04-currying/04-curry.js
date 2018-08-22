const _ = require('../helpers');

// replaceVoyelle :: String -> String -> String
const replaceVoyelle = _.replace(/[aeiou]/gi);
// replaceVoyelleWithStar :: String -> String
const replaceVoyelleWithStar = replaceVoyelle('*');

// crunchSpaces :: String -> String
const crunchSpaces = _.replace(/\s\s+/g, ' ');

console.log(replaceVoyelleWithStar('Elle est où la poulette ?'));
console.log(crunchSpaces(replaceVoyelle('', 'Le petit oiseau a pris sa volée')));
