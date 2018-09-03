const R = require('ramda');

// getOdds :: List Int -> List Int
const getOdds = R.filter(R.modulo(2))

console.log(getOdds([1, 2, 3, 4, 5]));
