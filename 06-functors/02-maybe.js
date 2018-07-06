const _ = require('../helpers');

// ? se passer de gestion de null !!!!!!!!


console.log(_.map(_.add(2), null));



class Maybe {
  constructor(value) {
    this.value = value;
  }

  map(fn) {
    return _.isNil(this.value) ? new Maybe(fn(this.value)) : new Maybe(null);
  }
}


console.log(_.map(_.add(2), new Maybe(2)));
console.log(_.map(_.add(2), new Maybe(null)));
