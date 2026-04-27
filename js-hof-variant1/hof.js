export const map = (fn, array) => {
  const result = [];
  for (const item of array) result.push(fn(item));
  return result;
};

export const filter = (fn, array) => {
  const result = [];
  for (const item of array) if (fn(item)) result.push(item);
  return result;
};

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const partial = (fn, ...fixedArgs) => {
  return (...remainingArgs) => fn(...fixedArgs, ...remainingArgs);
};

export const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};