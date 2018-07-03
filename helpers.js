// utils
const noop = () => {};
const isNil = v => v == null;
const isFn = v => !isNil(v) && typeof v === 'function';

// functions
const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const partial = (fn, ...args) => fn.bind(fn, ...args);
const pipe = (...fns) => curry(l => fns.reduce((a, fn) => fn(a), l));
const compose = (...fns) => curry(l => fns.reverse().reduce((a, fn) => fn(a), l));
const reverseArgs = fn => (...args) => fn(...args.reverse());
const wrap = (fn, wrapper) => (...args) => wrapper(fn, ...args);
const identity = x => x;
const constant = x => () => x;

// object
const set = curry((name, value, obj) => ({ ...obj, [name]: value }));
const get = curry((name, obj) => obj && obj[name]);
const toPairs = curry(obj => Object.entries(obj));
const keys = curry(obj => Object.keys(obj));
const values = curry(obj => Object.values(obj));
const extend = (...objs) => Object.assign({}, ...objs);

// collection
const first = curry(l => l[0]);
const find = curry((fn, l) => l.find(fn));
const last = curry(l => l[l.length]);
const nth = curry((n, l) => l[n]);
const all = curry((fn, l) => l.every(fn));
const any = curry((fn, l) => l.some(fn));
const compact = curry(l => l.filter(isNil));
const fill = curry((v, l) => l.map((...args) => (isFn(v) ? v(...args) : v)));
const filter = curry((fn, l) => l.filter(fn));
const map = curry((fn, l) => l.map(fn));
const none = curry((fn, l) => !l.some(fn));
const reduce = curry((fn, init, l) => l.reduce(fn, init));
const times = curry((fn, n) => Array(...Array(n)).map((_, i) => fn(i)));
const take = curry((n, l) => l.slice(0, n));

// chain
const tap = curry((v, fn) => (fn(v), v));

module.exports = {
  all,
  any,
  compact,
  compose,
  curry,
  extend,
  fill,
  filter,
  find,
  first,
  get,
  isFn,
  isNil,
  keys,
  last,
  map,
  none,
  noop,
  nth,
  partial,
  pipe,
  reduce,
  reverseArgs,
  set,
  tap,
  times,
  toPairs,
  values,
  wrap
};
