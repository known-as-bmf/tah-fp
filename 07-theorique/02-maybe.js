const _ = require('../helpers');

// ? se passer de gestion de null !!!!!!!!

try {
  console.log(_.map(_.add(2), null));
} catch (e) {
  console.error(e);
}

class Maybe {
  constructor(value) {
    this.__value = value;
  }

  static of(value) {
    return new Maybe(value);
  }

  map(fn) {
    return _.isNil(this.__value) ? Maybe.of(null) : Maybe.of(fn(this.__value));
  }
}

console.log(_.map(_.add(2), Maybe.of(2)));
console.log(_.map(_.add(2), Maybe.of(null)));

_.compose(
  console.log,
  _.map(_.get('doesnotexisteither')),
  _.map(_.get('doesnotexist'))
)(Maybe.of('wanegaine'));
