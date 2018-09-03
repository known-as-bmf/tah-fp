// ? je dois appliquer ce filtre plusieurs fois

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

function filterList(l) {
  const target = [];
  for (const obj of l) {
    if (obj.n >= 5) {
      target.push(obj);
    }
  }
  return target;
}

const target = filterList(arr);
const target2 = filterList(arr);

console.log(target);
console.log(target2);
console.log(JSON.stringify(target) === JSON.stringify(target2));
