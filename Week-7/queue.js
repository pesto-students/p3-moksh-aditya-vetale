class queue {
  constructor() {
    this.items = [];
    this.back = -1;
    this.maxSize = 10;
  }
  get size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      throw "queue is empty";
    }
    return this.items[this.back];
  }

  enqueue(n) {
    if (this.size === this.maxSize) {
      throw "queue overflow";
    }
    this.items.push(n);
    this.back += 1;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw "queue is empty";
    }
    this.back -= 1;
    return this.items.shift();
  }
}

const q = new queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue());
console.log(q.peek());
console.log(q.dequeue());
console.log(q.peek());
console.log(q.dequeue());
