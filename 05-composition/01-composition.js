// ? composition ?

// ? compose(f, g)(x) === f(g(x))
// compose :: (b -> c), (a -> b) -> (a -> c)
var compose = (f, g) => x => f(g(x));
// pipe :: (a -> b), (b -> c) -> (a -> c)
var pipe = (f, g) => x => g(f(x));

// toUpperCase :: String -> String
var toUpperCase = x => x.toUpperCase();
// exclaim :: String -> String
var exclaim = x => x + '!';

// shout :: String -> String
var shout = compose(
  exclaim,
  toUpperCase
);

console.log(shout('mordu, mordu, morduuuuu'));
