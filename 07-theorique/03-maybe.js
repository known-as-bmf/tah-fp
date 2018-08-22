const _ = require('../helpers');

class Maybe {
  constructor(value) {
    this.__value = value;
  }
  static of(value) {
    return new Maybe(value);
  }
  static get Nothing() {
    return Maybe.of(null);
  }
  static Just(value) {
    return Maybe.of(value);
  }
  map(fn) {
    return _.isNil(this.__value) ? Maybe.of(null) : Maybe.of(fn(this.__value));
  }
}

const user = {
  name: 'Julien',
  age: 30,
  mood: '👌'
};

var salutation = _.compose(
  _.prepend('Bonjour, '),
  _.get('name')
);

var logSalutation = _.compose(
  console.log,
  salutation
);

try {
  logSalutation(null);
} catch (e) {
  console.error(e);
}

logSalutation(user);

_.map(logSalutation, Maybe.Just(user));
_.map(logSalutation, Maybe.Nothing);
