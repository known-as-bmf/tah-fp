const _ = require('../helpers');

// ? transformer un fonction impure en fonction pure

const memoize = f => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    const cached = cache[key];

    if (_.isNil(cached)) return cache[key] = f(...args);
    return cached;
  };
}

let name = 'Julien';

function updateName(fragment) {
  return name += fragment;
}

const memoizedUpdateName = memoize(updateName);

console.log(memoizedUpdateName(' Avert'));
console.log(memoizedUpdateName(' Avert'));
console.log(memoizedUpdateName(' Avert'));
console.log(memoizedUpdateName(' Lol'));
console.log(memoizedUpdateName(' Lol'));
console.log(memoizedUpdateName(' Lol'));
console.log(memoizedUpdateName(' Avert'));
