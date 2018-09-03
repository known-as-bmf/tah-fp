const R = require('ramda');

// ? rends le code plus lisible / compréhensible

// add :: Number -> Number -> Number
const add = R.curry((a, b) => a + b);

// add1 :: Number -> Number
const add1 = add(1);

// filter :: (a -> Bool) -> List a -> List a

// map :: (a -> b) -> List a -> List b

// reduce :: ((b, a) -> b) -> b -> List a -> b
R.reduce(R.add, 0, [0, 1, 2, 3]);
