require("./src/where");
require("./src/select");
require("./src/selectMany");
require("./src/add");
require("./src/any");
require("./src/orderBy");
require("./src/firstOrDefault");
require("./src/lastOrDefault");
require("./src/groupBy");
require("./src/sequenceEqual");
require("./src/sum");
require("./src/max");
require("./src/min");
require("./src/chunk");
require("./src/indexValue");
require("./src/shuffle");
require("./src/next_previous");
require("./src/take");
interface Array<T> {
  where(predicate: (value: T) => boolean): Array<T>;
  whereNot(predicate: (value: T) => boolean): Array<T>;
  whereNull(selector: (value: T) => any): Array<T>;
  whereNotNull(selector: (value: T) => any): Array<T>;

  select<U>(select: (value: T) => U): Array<U>;
  selectMany<U>(select: (value: T) => Array<U>): Array<U>;

  add(item: T): Array<T>;
  addRange(items: T[]): Array<T>;

  any(predicate?: (value: T) => boolean): boolean;

  orderBy(selector: (value: T) => any): Array<T>;
  orderByDescending(selector: (value: T) => any): Array<T>;

  firstOrDefault(predicate?: (value: T) => boolean): T;
  lastOrDefault(predicate?: (value: T) => boolean): T;

  groupBy(selector: (value: T) => any): Array<{ Key: any; Values: Array<T> }>;

  sequenceEqual(
    target: Array<T>,
    predicate?: (x1: T, x2: T) => boolean
  ): boolean;

  sum(selector?: (value: T) => number): number;
  max(selector?: (value: T) => number): number;
  min(selector?: (value: T) => number): number;

  chunk(size: number): Array<Array<T>>;

  indexValue(predicate: (x: T) => boolean): { index: number; value: T };

  shuffle(): Array<T>;
  shuffleSlice(length: number): Array<T>;

  next(current: T, recursive?: boolean): T;
  previous(current: T, recursive?: boolean): T;

  take(count: number): Array<T>;
}
