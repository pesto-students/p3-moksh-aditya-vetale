class PromiseSimple {
  constructor(executionFunction) {
    this.promiseChain = [];
    this.handleError = () => {};

    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);

    executionFunction(this.onResolve, this.onReject);
  }

  then(OnThen) {
    this.promiseChain.push(OnThen);

    return this;
  }

  catch(OnCatch) {
    this.handleError = OnCatch;

    return this;
  }

  onResolve(value) {
    let storedValue = value;

    try {
      this.promiseChain.forEach((nextFunction) => {
        storedValue = nextFunction(storedValue);
      });
    } catch (error) {
      this.promiseChain = [];

      this.onReject(error);
    }
  }

  onReject(error) {
    this.handleError(error);
  }
}

const fn = new PromiseSimple((resolve, reject) => {
  let num = parseInt(Math.random() * 1000);
  setTimeout(() => {
    if (num % 5 === 0) {
      reject(new Error(`${num} is divisible by 5`));
    } else {
      resolve(num);
    }
  }, 1000);
});

fn.then((val) => {
  console.log(`${val} is not divisible by 5`);
}).catch((error) => {
  console.log(error);
});
