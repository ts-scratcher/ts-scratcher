
interface ObjectConstructor {
  isNullOrUndefined(obj: any): boolean;
  /**
   * get property path
   * @param exp
   */
  nameOf<T>(exp: (m: T) => any): string;

  /**
   * get value using property path
   * @param obj
   * @param exp
   */
  getValue<T, P>(obj: T, exp: (m: T) => P): P | undefined | null;

  /**
   * set value using property path
   * @param obj
   * @param exp
   * @param value
   */
  setValue<T, P>(obj: T, exp: (m: T) => P, value: P): boolean;
}
interface Object {}

Object.isNullOrUndefined = (obj: any) => {
  if (obj == null) return true;
  if (obj === null) return true;
  if (typeof obj === "undefined") return true;
  return false;
};
Object.nameOf = (exp: (m: any) => any) => {
  // hack no supported es5
  return exp
    .toString()
    .split(".")
    .slice(1)
    .map((x) => x.replace("?", ""))
    .join(".");
};

Object.getValue = (obj: any, exp: (m: any) => any) => {
  const path = Object.nameOf(exp);
  const arr = path.split(".");
  let result: any = obj;
  for (let i = 0; i < arr.length; i++) {
    if (Object.isNullOrUndefined(result)) {
      return result;
    }
    const path = arr[i];
    result = result[path];
  }
  return result;
};
Object.setValue = (obj: any, exp: (m: any) => any, value: any) => {
  const path = Object.nameOf(exp);
  const arr = path.split(".");
  let result: any = obj;
  for (let i = 0; i < arr.length; i++) {
    if (Object.isNullOrUndefined(result)) {
      return false;
    }
    const path = arr[i];
    if (i === arr.length - 1) {
      result[path] = value;
    } else {
      result = result[path];
    }
  }
  return true;
};
