'use strict';

// ? principe: quand on crée un objet, il est gelé
// ? on ne peux plus changer ses propriétés

// ? thread safe
// ? concept de "states"

const me = {
  id: 20,
  firstName: 'Julien',
  lastName: 'Avert',
  level: 9001,
  address: {
    street: '10 rue du Petit Curieux',
    city: 'Grenoble'
  }
};

me.id = 8;

Object.freeze(me);

try {
  me.id = 20;
} catch (e) {
  console.error(e);
}

// ! immuatbilité généralement "shallow" en js
me.address.street = '15 chemin du Petit Filou';

console.log(me);
