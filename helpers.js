const noop = () => {};
const isNil = v => v == null;
const isFn = v => !isNil(v) && typeof v === 'function';

const compact = array => array.filter(isNil);

const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length
    ? fn.apply(this, args)
    : curry.bind(this, fn, arity, ...args);

const fill = curry((v, a) =>
  a.map((...args) => (isFn(v) ? v.apply(this, args) : v))
);
const times = curry((fn, n) =>
  fill((v, i) => fn.apply(null, [i]), Array.apply(null, new Array(n)))
);
const map = curry((fn, l) => l.map(fn));
const filter = curry((fn, l) => l.filter(fn));

const all = curry((fn, l) => l.every(fn));
const any = curry((fn, l) => l.some(fn));
const none = curry((fn, l) => !l.some(fn));

const pipe = (...fns) => l => fns.reduce((a, fn) => fn(a), l);
const set = curry((name, value, obj) => ({ ...obj, [name]: value }));

module.exports = {
  all,
  any,
  compact,
  curry,
  fill,
  filter,
  isFn,
  isNil,
  map,
  none,
  noop,
  pipe,
  set,
  times
};
