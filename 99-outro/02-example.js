const R = require('ramda');

R.compose(
  console.log,
  R.join(' '),
  obj => R.map(
    R.ifElse(R.is(Function), R.applyTo(obj), R.identity()),
    [R.prop('subject'), '@ Viseo TaH on the', R.prop('date')]
  )
)({ subject: 'λ ✌', date: '2018-09-06', host: 'JAV' });


// ifElse :: (a -> Bool) -> (a -> b) -> (a -> b) -> b

// applyTo :: a -> (a -> b) -> b

// identity :: a -> a

// prop :: Str -> a -> b
