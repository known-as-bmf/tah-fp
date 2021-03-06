const arr = [
  { n: 0, sq: 0 },
  { n: 1, sq: 1 },
  { n: 2, sq: 4 },
  { n: 3, sq: 9 },
  { n: 4, sq: 16 },
  { n: 5, sq: 25 },
  { n: 6, sq: 36 },
  { n: 7, sq: 49 },
  { n: 8, sq: 64 },
  { n: 9, sq: 81 }
];

function filterList(l, fn) {
  const target = [];
  for (const obj of l) {
    if (fn(obj)) {
      target.push(obj);
    }
  }
  return target;
}

const target = filterList(arr, obj => obj.n >= 5);
const target2 = filterList(arr, obj => obj.n < 5);

console.log(target);
console.log(target2);
