const _ = require('../helpers');

const user = {
  name: 'Julien',
  age: 30,
  mood: '👌'
};

var salutation = _.compose(_.prepend('Bonjour, '), _.get('name'));

var logSalutation = _.compose(console.log, salutation);

try {
  logSalutation(null);
} catch (e) {
  console.error(e);
}


logSalutation(user);
_.map(logSalutation, _.Maybe.Nothing);
