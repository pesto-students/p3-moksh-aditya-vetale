const obj = {
  n: 5,
  [Symbol.iterator]() {
    let n = this.n;
    let old = 0;
    let newer = 1;
    let counter = 0;
    return {
      next() {
        let temp = old;
        old = newer;
        newer = temp + old;
        return { value: temp, done: counter++ === n };
      },
    };
  },
};

// set value of n as required
obj.n = 10;

for (let el of obj) {
  console.log(el);
}
