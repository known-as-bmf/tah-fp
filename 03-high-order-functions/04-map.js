// ? transformation immutable d'une collection

const arr = [1, 2, 3, 2, 4, 6, 5, 8];

console.log(arr.map(i => i + 10));


// ? par la suite on pourra utiliser

map(i => i + 10, arr);
