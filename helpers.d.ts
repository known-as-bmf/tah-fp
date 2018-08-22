interface CurriedFunction<T1, R> {
  (t1: T1): R;
}

interface CurriedFunction2<T1, T2, R> {
  (t1: T1): (t2: T2) => R;
  (t1: T1, t2: T2): R;
}

interface CurriedFunction3<T1, T2, T3, R> {
  (t1: T1): CurriedFunction2<T2, T3, R>;
  (t1: T1, t2: T2): (t3: T3) => R;
  (t1: T1, t2: T2, t3: T3): R;
}

interface CurriedFunction4<T1, T2, T3, T4, R> {
  (t1: T1): CurriedFunction3<T2, T3, T4, R>;
  (t1: T1, t2: T2): CurriedFunction2<T3, T4, R>;
  (t1: T1, t2: T2, t3: T3): (t4: T4) => R;
  (t1: T1, t2: T2, t3: T3, t4: T4): R;
}

interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
  (t1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
  (t1: T1, t2: T2): CurriedFunction3<T3, T4, T5, R>;
  (t1: T1, t2: T2, t3: T3): CurriedFunction2<T4, T5, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4): (t5: T5) => R;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
}

interface CurriedFunction6<T1, T2, T3, T4, T5, T6, R> {
  (t1: T1): CurriedFunction5<T2, T3, T4, T5, T6, R>;
  (t1: T1, t2: T2): CurriedFunction4<T3, T4, T5, T6, R>;
  (t1: T1, t2: T2, t3: T3): CurriedFunction3<T4, T5, T6, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction2<T5, T6, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): (t6: T6) => R;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): R;
}

export function noop(): void;
export function isNil<T>(x: T): boolean;
export function isFn<T>(x: T): x is Function;
export function not<T>(x: T): T;

export function id<T>(x: T): T;
export function id<T>(): (x: T) => T;
export function constant<T>(x: T): () => T;
export function constant<T>(): (x: T) => () => T;

export function complement(fn: (...args) => any): (...args) => boolean;
export function wrap<T extends (...args) => any>(
  wrapper: (wrappee: T, ...args) => any,
  wrappee: T
): T;

export function lt(a: number, b: number): boolean;
export function lt(a: number): (b: number) => boolean;
export function lte(a: number, b: number): boolean;
export function lte(a: number): (b: number) => boolean;
export function gt(a: number, b: number): boolean;
export function gt(a: number): (b: number) => boolean;
export function gte(a: number, b: number): boolean;
export function gte(a: number): (b: number) => boolean;

export function times<T>(fn: (i: number) => T, n: number): T[];
export function times<T>(fn: (i: number) => T): (n: number) => T[];

export function map<T, U>(fn: (x: T) => U, list: ReadonlyArray<T>): U[];
export function map<T, U>(fn: (x: T) => U): (list: ReadonlyArray<T>) => U[];

export function flatMap<T, U>(fn: (x: T) => U[], list: ReadonlyArray<T>): U[];
export function flatMap<T, U>(
  fn: (x: T) => U[]
): (list: ReadonlyArray<T>) => U[];

export function filter<T>(fn: (x: T) => boolean, list: ReadonlyArray<T>): T[];
export function filter<T>(
  fn: (x: T) => boolean
): (list: ReadonlyArray<T>) => T[];

export function prepend<T>(a: T[], b: T[]): T[];
export function prepend<T>(a: T[]): (b: T[]) => T[];
export function prepend(a: string, b: string): string;
export function prepend(a: string): (b: string) => string;
export function append<T>(a: T[], b: T[]): T[];
export function append<T>(a: T[]): (b: T[]) => T[];
export function append(a: string, b: string): string;
export function append(a: string): (b: string) => string;

export function times<T>(fn: (i: number) => T, n: number): T[];
export function times<T>(fn: (i: number) => T): (n: number) => T[];

export function first<T>(list: ReadonlyArray<T>): T;
export function first<T>(): (list: ReadonlyArray<T>) => T;
export function last<T>(list: ReadonlyArray<T>): T;
export function last<T>(): (list: ReadonlyArray<T>) => T;
export function nth<T>(n: number, list: ReadonlyArray<T>): T;
export function nth<T>(n: number): (list: ReadonlyArray<T>) => T;
export function start<T>(list: ReadonlyArray<T>): T[];
export function start<T>(): (list: ReadonlyArray<T>) => T[];
export function end<T>(list: ReadonlyArray<T>): T[];
export function end<T>(): (list: ReadonlyArray<T>) => T[];

export function find<T>(fn: (x: T) => boolean, list: ReadonlyArray<T>): T;
export function find<T>(fn: (x: T) => boolean): (list: ReadonlyArray<T>) => T;

export function compact<T>(list: ReadonlyArray<T>): T[];

export function all<T>(fn: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
export function all<T>(
  fn: (x: T) => boolean
): (list: ReadonlyArray<T>) => boolean;
export function any<T>(fn: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
export function any<T>(
  fn: (x: T) => boolean
): (list: ReadonlyArray<T>) => boolean;
export function none<T>(fn: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
export function none<T>(
  fn: (x: T) => boolean
): (list: ReadonlyArray<T>) => boolean;

export function tap<T>(fn: (v: T) => any, v: T): T;

export function doIf<T, R>(cond: (v: T) => boolean, fnIf: (v: T) => R, v: T): R;
export function doIf<T, R>(
  cond: (v: T) => boolean
): (fnIf: (v: T) => R, v: T) => R;
export function doIf<T, R>(
  cond: (v: T) => boolean,
  fnIf: (v: T) => R
): (v: T) => R;

export function doIfElse<T, R, R2>(
  cond: (v: T) => boolean,
  fnIf: (v: T) => R,
  fnElse: (v: T) => R2,
  v: T
): R | R2;
export function doIfElse<T, R, R2>(
  cond: (v: T) => boolean
): (fnIf: (v: T) => R, fnElse: (v: T) => R2, v: T) => R | R2;
export function doIfElse<T, R, R2>(
  cond: (v: T) => boolean,
  fnIf: (v: T) => R
): (fnElse: (v: T) => R2, v: T) => R | R2;
export function doIfElse<T, R, R2>(
  cond: (v: T) => boolean,
  fnIf: (v: T) => R,
  fnElse: (v: T) => R2
): (v: T) => R | R2;

export function get<P extends string, T>(k: P, o: T): T[P];
export function get<P extends string, T>(k: P): (o: T) => T[P];

export function merge<T1>(a: T1): T1;
export function merge<T1, T2>(a: T1, b: T2): T1 & T2;
export function merge<T1, T2, T3>(a: T1, b: T2, c: T3): T1 & T2 & T3;
export function merge<T1, T2, T3, T4>(
  a: T1,
  b: T2,
  c: T3,
  d: T4
): T1 & T2 & T3 & T4;
export function merge<T1, T2, T3, T4, T5>(
  a: T1,
  b: T2,
  c: T3,
  d: T4,
  e: T5
): T1 & T2 & T3 & T4 & T5;
export function merge<T1, T2, T3, T4, T5, T6>(
  a: T1,
  b: T2,
  c: T3,
  d: T4,
  e: T5,
  f: T6
): T1 & T2 & T3 & T4 & T5 & T6;

export function curry<T1, TResult>(
  fn: (a: T1) => TResult
): CurriedFunction<T1, TResult>;
export function curry<T1, T2, TResult>(
  fn: (a: T1, b: T2) => TResult
): CurriedFunction2<T1, T2, TResult>;
export function curry<T1, T2, T3, TResult>(
  fn: (a: T1, b: T2, c: T3) => TResult
): CurriedFunction3<T1, T2, T3, TResult>;
export function curry<T1, T2, T3, T4, TResult>(
  fn: (a: T1, b: T2, c: T3, d: T4) => TResult
): CurriedFunction4<T1, T2, T3, T4, TResult>;
export function curry<T1, T2, T3, T4, T5, TResult>(
  fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => TResult
): CurriedFunction5<T1, T2, T3, T4, T5, TResult>;
export function curry<T1, T2, T3, T4, T5, T6, TResult>(
  fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6) => TResult
): CurriedFunction6<T1, T2, T3, T4, T5, T6, TResult>;

export function pipe<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
export function pipe<V0, T1, T2>(
  fn0: (x0: V0) => T1,
  fn1: (x: T1) => T2
): (x0: V0) => T2;
export function pipe<V0, T1, T2, T3>(
  fn0: (x: V0) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3
): (x: V0) => T3;
export function pipe<V0, T1, T2, T3, T4>(
  fn0: (x: V0) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4
): (x: V0) => T4;
export function pipe<V0, T1, T2, T3, T4, T5>(
  fn0: (x: V0) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5
): (x: V0) => T5;
export function pipe<V0, T1, T2, T3, T4, T5, T6>(
  fn0: (x: V0) => T1,
  fn1: (x: T1) => T2,
  fn2: (x: T2) => T3,
  fn3: (x: T3) => T4,
  fn4: (x: T4) => T5,
  fn5: (x: T5) => T6
): (x: V0) => T6;

export function compose<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
export function compose<V0, T1, T2>(
  fn1: (x: T1) => T2,
  fn0: (x0: V0) => T1
): (x0: V0) => T2;
export function compose<V0, T1, T2, T3>(
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (x: V0) => T1
): (x: V0) => T3;
export function compose<V0, T1, T2, T3, T4>(
  fn3: (x: T3) => T4,
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (x: V0) => T1
): (x: V0) => T4;
export function compose<V0, T1, T2, T3, T4, T5>(
  fn4: (x: T4) => T5,
  fn3: (x: T3) => T4,
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (x: V0) => T1
): (x: V0) => T5;
export function compose<V0, T1, T2, T3, T4, T5, T6>(
  fn5: (x: T5) => T6,
  fn4: (x: T4) => T5,
  fn3: (x: T3) => T4,
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (x: V0) => T1
): (x: V0) => T6;
