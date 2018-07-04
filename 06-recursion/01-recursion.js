// ? tout le monde connait

const factorial = n => {
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(4));
console.log(factorial(40));
console.log(factorial(400));

try {
  console.log(factorial(100000));
} catch (e) {
  console.error(e);
}

// ? tail call optimization
const factorial2 = (n, accum = 1) => {
  if (n < 2) {
    return accum;
  }
  return factorial2(n - 1, n * accum);
};

console.log(factorial2(4));
console.log(factorial2(40));
console.log(factorial2(400));
console.log(factorial2(100000));
