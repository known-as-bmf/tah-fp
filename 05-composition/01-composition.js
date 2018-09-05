// ? composition ? issu de la theorie des categories

// ? a -> b, b -> c
// ? a -> c

// ? compose(f, g)(a) === f(g(a))
// compose :: (b -> c), (a -> b) -> (a -> c)
var compose = (f, g) => x => f(g(x));

// toUpperCase :: String -> String
var toUpperCase = x => x.toUpperCase();
// exclaim :: String -> String
var exclaim = x => x + '!';

const str = 'mordu, mordu, morduuuuu';

console.log(exclaim(toUpperCase(str)));

// shout :: String -> String
var shout = compose(
  exclaim,
  toUpperCase
);

console.log(shout(str));

// ? pipe(f, g)(a) === g(f(a))
// pipe :: (a -> b), (b -> c) -> (a -> c)
var pipe = (f, g) => x => g(f(x));
var shout = compose(
  toUpperCase,
  exclaim
);
