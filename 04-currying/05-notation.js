const _ = require('../helpers');

// ? rends le code plus lisible / compréhensible

// add :: Number -> Number -> Number
const add = _.curry((a, b) => a + b);

// add1 :: Number -> Number
const add1 = add(1);

// filter :: (a -> Bool) -> List a -> List a

// map :: (a -> b) -> List a -> List b

// reduce :: ((b, a) -> b) -> b -> List a -> b
console.log(_.reduce(_.add, 0, [0, 1, 2, 3]));
