class Stack {
  constructor() {
    this.items = [];
    this.top = -1;
    this.maxSize = 10;
  }

  get size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(n) {
    if (this.size === this.maxSize) {
      throw "stack overflow";
    }
    this.items.push(n);
    this.top += 1;
  }

  pop() {
    if (this.isEmpty()) {
      throw "stack is empty";
    }
    this.top -= 1;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      throw "stack is empty";
    }
    return this.items[this.top];
  }
}

module.exports = {
  Stack,
};
// const d = new stack();
// d.push(1);
// d.push(2);
// d.push(3);
// d.push(4);
// console.log(d.items);
// console.log(d.peek());
// console.log(d.pop());
// console.log(d.peek());
// console.log(d.pop());
// console.log(d.items);

// function redundant(exp){
//  let demo = new stack();

//  for (char of exp){
//   while
//  }
// }

///////////////--------QueueUsingStack--------//////////////////
// class QueueUsingStack {
//   constructor() {
//     this.inbox = new stack();
//     this.outbox = new stack();
//   }

//   enqueue(value) {
//     this.inbox.push(value);
//   }

//   dequeue() {
//     if (this.outbox.isEmpty()) {
//       while (!this.inbox.isEmpty()) {
//         this.outbox.push(this.inbox.pop());
//       }
//     }
//     return this.outbox.pop();
//   }
// }

// let line = new QueueUsingStack();

// line.enqueue(1);
// line.enqueue(2);
// line.enqueue(3);
// line.enqueue(3);

// console.log(line.dequeue());
// console.log(line.dequeue());
// console.log(line.dequeue());
// console.log(line.dequeue());

////////////////---paranthesis checker---///////////////

// let x = "{[(]}";

// function paranthesisChecker(str) {
//   if (str.length % 2 !== 0) return false;
//   const openMap = new Set(["(", "{", "["]);
//   const Closedap = new Map([
//     [")", "("],
//     ["}", "{"],
//     ["]", "["],
//   ]);
//   let box = new stack();
//   for (let i = 0; i < str.length; i++) {
//     if (openMap.has(str[i])) {
//       box.push(str[i]);
//     } else {
//       const pop = box.pop();
//       if (pop !== Closedap.get(str[i])) {
//         return false;
//       }
//     }
//   }
//   return box.isEmpty();
// }

// console.log(paranthesisChecker(x));
/////////////////////////////--- next greater element---//////////////////////////////
