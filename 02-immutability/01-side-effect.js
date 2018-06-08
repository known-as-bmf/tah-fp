const me = {
  id: 20,
  firstName: 'Julien',
  lastName: 'avert',
  level: 9001,
  address: {
    street: '10 rue du Petit Curieux',
    city: 'Grenoble'
  }
};

function verifyPerson(obj) {
  // ? verifier que l'utilisateur est correct
  const valid = obj && obj.id && obj.firstName && obj.lastName && obj.address;
  if (!valid) {
    throw new Error('Invalid user');
  }
}

function augmentPerson(obj) {
  obj.fullName = obj.firstName + obj.lastName;
}

function storePerson(obj) {
  // * GDPR!!! on vire les adresses
  delete obj.address;
  // TODO store in db
}

function augmentAndVerifyPerson(obj) {
  verifyPerson(obj);
  augmentPerson(obj);
  storePerson(obj);

  console.log(obj.address.street);
}

augmentAndVerifyPerson(me);
