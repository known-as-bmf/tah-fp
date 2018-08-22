const _ = require('../helpers');

// ? un functor est un objet qui possède une
// ? fonction map qui prends une fonction argument

// ? quand le map d'un functor est appellé,
// ? il retourne un functor du même type

// ? c'est comme un interface

// ? Array est un functor
console.log([1, 2].map(i => i + 1));

// ? pointed functor
class Container {
  constructor(value) {
    this.__value = value;
  }

  // of :: a -> Container a
  static of(value) {
    return new Container(value);
  }

  // map :: (a -> b) -> Container b
  map(fn) {
    return Container.of(fn(this.__value));
  }
}

console.log(Container.of(3).map(_.add(2)));

console.log(
  _.map(
    _.compose(
      _.get('length'),
      _.append(' bistoufly')
    ),
    Container.of('wanegaine')
  )
);
