const { curry } = require('../helpers');

// ? rends le code plus lisible / compréhensible

// add :: Number -> Number -> Number
const add = curry((a, b) => a + b);

// add1 :: Number -> Number
const add1 = add(1);

// filter :: (a -> Bool) -> List a -> List a

// map :: (a -> b) -> List a -> List b
