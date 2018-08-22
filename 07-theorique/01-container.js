class Container {
  constructor(value) {
    this.__value = value;
  }
  // of :: a -> Container a
  static of(value) {
    return new Container(value);
  }
}

console.log(Container.of(6));
console.log(Container.of('zob'));
console.log(Container.of(Container.of({ name: 'Ju' })));
console.log(Container.of(x => x + ' lol'));
