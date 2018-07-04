// utils
const noop = () => {};
const isNil = v => v == null;
const isFn = v => !isNil(v) && typeof v === 'function';

// functions
const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const partial = (fn, ...args) => fn.bind(fn, ...args);
const pipe = (...fns) => l => fns.reduce((a, fn) => fn(a), l);
const compose = (...fns) => pipe(...fns.reverse());
const reverseArgs = fn => (...args) => fn(...args.reverse());
const wrap = (fn, wrapper) => (...args) => wrapper(fn, ...args);
const identity = curry(x => x);
const constant = curry(x => () => x);
const doIf = curry((cond, fnIf, v) => (cond(v) ? fnIf(v) : v));
const doIfElse = curry(
  (cond, fnIf, fnElse, v) => (cond(v) ? fnIf(v) : fnElse(v))
);

// cond
const equals = curry((a, b) => a === b);
const lt = curry((a, b) => a > b);
const lte = curry((a, b) => a >= b);
const gt = curry((a, b) => a < b);
const gte = curry((a, b) => a <= b);

// object
const set = curry((name, value, obj) => ({ ...obj, [name]: value }));
const get = curry((name, obj) => obj && obj[name]);
const toPairs = curry(obj => Object.entries(obj));
const keys = curry(obj => Object.keys(obj));
const values = curry(obj => Object.values(obj));
const merge = (...objs) => Object.assign({}, ...objs);

// collection
const first = curry(l => l[0]);
const last = curry(l => l[l.length - 1]);
const nth = curry((n, l) => l[n + 1]);

const start = curry(l => l.slice(0, l.length - 1));
const end = curry(l => l.slice(1));

const find = curry((fn, l) => l.find(fn));
const all = curry((fn, l) => l.every(fn));
const any = curry((fn, l) => l.some(fn));
const compact = curry(l => l.filter(isNil));
const fill = curry((v, l) => l.map((...args) => (isFn(v) ? v(...args) : v)));
const filter = curry((fn, l) => l.filter(fn));
const map = curry((fn, l) => l.map(fn));
const flatMap = curry((fn, l) => [].concat(...l.map(fn)));
const none = curry((fn, l) => !l.some(fn));
const reduce = curry((fn, init, l) => l.reduce(fn, init));
const times = curry((fn, n) => Array(...Array(n)).map((_, i) => fn(i)));
const take = curry((n, l) => l.slice(0, n));
const skip = curry((n, l) => l.slice(n));

// chain
const tap = curry((fn, v) => (fn(v), v));

module.exports = {
  all,
  any,
  compact,
  compose,
  constant,
  curry,
  doIf,
  doIfElse,
  end,
  equals,
  fill,
  filter,
  find,
  first,
  flatMap,
  get,
  gt,
  gte,
  identity,
  isFn,
  isNil,
  keys,
  last,
  lt,
  lte,
  map,
  merge,
  none,
  noop,
  nth,
  partial,
  pipe,
  reduce,
  reverseArgs,
  set,
  skip,
  start,
  take,
  tap,
  times,
  toPairs,
  values,
  wrap
};
