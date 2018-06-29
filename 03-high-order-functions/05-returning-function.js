const _ = require('../helpers');

// ? function returning a function

const reverseArgs = fn => (...args) => fn(...args.reverse());

function greet(firstName, lastName) {
  console.log('Hello,', firstName, lastName);
}
const reversedGreet = reverseArgs(greet);

greet('Julien', 'Avert');
reversedGreet('Julien', 'Avert');
