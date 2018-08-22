// * functions
const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const partial = (fn, ...args) => fn.bind(fn, ...args);
const pipe = (...fns) => x => fns.reduce((y, fn) => fn(y), x);
const compose = (...fns) => x => fns.reduceRight((y, fn) => fn(y), x);
const reverseArgs = fn => (...args) => fn(...args.reverse());
const wrap = curry((wrapper, fn) => (...args) => wrapper(fn, ...args));
const doIf = curry((cond, fnIf, v) => (cond(v) ? fnIf(v) : v));
const doIfElse = curry(
  (cond, fnIf, fnElse, v) => (cond(v) ? fnIf(v) : fnElse(v))
);
const memoize = f => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    const cached = cache[key];

    if (isNil(cached)) return cache[key] = f(...args);
    return cached;
  };
}

// * utils
const noop = () => {};
const isNil = v => v == null;
const isFn = v => !isNil(v) && typeof v === 'function';
const id = curry(x => x);
const constant = curry(x => () => x);
const complement = fn =>
  compose(
    not,
    fn
  );

// * math
const add = curry((a, b) => a + b);
const sub = curry((a, b) => b - a);
const subLeft = curry((a, b) => a - b);
const mult = curry((a, b) => a * b);
const pow = curry((pow, n) => Math.pow(n, pow));

// str
const prepend = curry((a, b) => a.concat(b));
const append = curry((a, b) => b.concat(a));
const match = curry((pattern, str) => str.match(pattern));
const replace = curry((what, repl, str) => str.replace(what, repl));
const split = curry((sep, s) => s.split(sep));
const lower = curry(s => s.toLowerCase());
const size = curry(s => s.length);

// cond
const equals = curry((a, b) => a === b);
const lt = curry((a, b) => a > b);
const lte = curry((a, b) => a >= b);
const gt = curry((a, b) => a < b);
const gte = curry((a, b) => a <= b);
const not = v => !v;

// object
const set = curry((name, value, obj) => ({ ...obj, [name]: value }));
const get = curry((name, obj) => obj[name]);
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

const join = curry((s, l) => l.join(s));

const find = curry((fn, l) => l.find(fn));
const all = curry((fn, l) => l.every(fn));
const any = curry((fn, l) => l.some(fn));
const compact = curry(l => l.filter(complement(isNil)));
const fill = curry((v, l) => l.map((...args) => (isFn(v) ? v(...args) : v)));
const filter = curry((fn, l) => l.filter(fn));
const map = curry((fn, l) => l.map(fn));
const flatMap = curry((fn, l) => [].concat(...l.map(fn)));
const none = curry((fn, l) => !l.some(fn));
const reduce = curry((fn, init, l) => l.reduce(fn, init));
const times = curry((fn, n) => Array(...Array(n)).map((_, i) => fn(i)));
const take = curry((n, l) => l.slice(0, n));
const skip = curry((n, l) => l.slice(n));
const sortBy = curry((compFn, l) =>
  [...l].sort((a, b) => ('' + compFn(a)).localeCompare('' + compFn(b)))
);

// chain
const tap = curry((fn, x) => (fn(x), x));

class Maybe {
  constructor(value) {
    this.__value = value;
  }
  static of(value) {
    return new Maybe(value);
  }
  static get Nothing() {
    return Maybe.of(null);
  }
  static Just(value) {
    return Maybe.of(value);
  }
  map(fn) {
    return isNil(this.__value) ? Maybe.of(null) : Maybe.of(fn(this.__value));
  }
}

module.exports = {
  Maybe,
  add,
  all,
  any,
  append,
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
  id,
  isFn,
  isNil,
  join,
  keys,
  last,
  lower,
  lt,
  lte,
  map,
  match,
  memoize,
  merge,
  mult,
  none,
  noop,
  nth,
  partial,
  pipe,
  pow,
  prepend,
  reduce,
  replace,
  reverseArgs,
  set,
  size,
  skip,
  sortBy,
  split,
  start,
  sub,
  subLeft,
  take,
  tap,
  times,
  toPairs,
  values,
  wrap
};
