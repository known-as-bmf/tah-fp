const _ = require('../helpers');

// ? un functor est un objet qui possède une
// ? fonction map qui prends une fonction argument

// ? quand le map d'un functor est appellé,
// ? il retourne un functor du même type

// ? c'est comme un interface


// ? Array est un functor
console.log([1, 2].map(i => i + 1));


class MyObject {
  constructor(value) {
    this.value = value;
  }

  map(fn) {
    return new MyObject(fn(this.value))
  }
}

console.log(new MyObject(3).map(_.add(2)));
