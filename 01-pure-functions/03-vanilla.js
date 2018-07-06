const arr = [1, 2, 3, 4, 5];

// ? pure
console.log('pure');
console.log(arr.slice(0, 3));
console.log(arr.slice(0, 3));
console.log(arr.slice(0, 3));

// ! impure
console.log('impure');
console.log(arr.splice(0, 3));
console.log(arr.splice(0, 3));
console.log(arr.splice(0, 3));
