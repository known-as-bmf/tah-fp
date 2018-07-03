// ? on peut conserver toute les "versions" d'un objet au cours de ses changements
// ? immutabilité = thread safety !

// ! immuatbilité généralement "shallow" en js

const arr = [0, 1, 2, 4, 8];

console.log(arr.map(i => Math.pow(i, 2)));
console.log(arr.map(i => Math.pow(i, 4)));
console.log(arr);

const objs = [
  { name: 'James', active: true, deceased: false },
  { name: 'Kirk', active: true, deceased: false },
  { name: 'Robert', active: true, deceased: false },
  { name: 'Lars', active: true, deceased: false },
  { name: 'Cliff', active: false, deceased: true },
  { name: 'Dave', active: false, deceased: false }
];

console.log('Original:', objs.map(m => m.name));

const objs2 = objs.map(
  m => (!m.deceased ? { ...m } : { ...m, name: m.name + ' †' })
);
console.log('Imm. map:', objs2.map(m => m.name));
console.log('Original:', objs.map(m => m.name));

const objs3 = objs.map(m => {
  if (m.deceased) {
    m.name += ' †';
  }
  return m;
});

console.log('Mut. map:', objs3.map(m => m.name));
console.log('Original:', objs.map(m => m.name));
