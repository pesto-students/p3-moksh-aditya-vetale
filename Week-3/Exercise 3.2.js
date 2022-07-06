function demo(a, b, c) {
  console.log(this.num1 + a + b + c);
}

const binded = demo.bind({ num1: 3 }, 2, 1, 4);
binded();
demo.call({ num1: 5 }, 1, 6, 7);
demo.apply({ num1: 5 }, [6, 4, 8]);
