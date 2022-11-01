function add() {
  let sum = 0;
  if (arguments.length === 1) {
    return arguments[0];
  }
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = args;
    if (cache.has(key)) {
      console.log(cache);
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    console.log(cache);
    return cache.get(key);
  };
}

function time(fnc) {
  console.time();
  fnc();
  console.timeEnd();
}

//Create a method called memoize such that:
const memoizeAdd = memoize(add);
//then calling...
time(() => memoizeAdd(100, 100)); //returns 200
time(() => memoizeAdd(100)); //returns 100
time(() => memoizeAdd(100, 200)); //returns 300
time(() => memoizeAdd(100, 100)); //returns 200 without computing
