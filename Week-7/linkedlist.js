// const linkedlist = {
//   val: 8,
//   next: {
//     val: 6,
//     next: {
//       val: 10,
//       next: {
//         val: 7,
//         next: null,
//       },
//     },
//   },
// };

// let arr = [];
// let head = linkedlist;

// while (head != null) {
//   arr.push(head.val);
//   head = head.next;
// }

// console.log(arr);

// var reverseList = function (head) {
//   let temp = head;
//   let arr = [];
//   while (temp != null) {
//     arr.push(temp.val);
//     temp = temp.next;
//   }
//   console.log(arr);

//   let temp1 = head;
//   while (temp1 != null) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//       temp1.val = arr[i];
//       temp1 = temp1.next;
//     }
//   }
//   return head;
// };

// var isPalindrome = function (head) {
//   let temporary_node = head;
//   const LL_items = [];
//   while (temporary_node != null) {
//     LL_items.push(temporary_node.val);
//     temporary_node = temporary_node.next;
//   }

//   const LL_string = LL_items.join("");
//   const LL_string_reverse = LL_items.reverse().join("");

//   return LL_string === LL_string_reverse;
// };

///////////////////////////////////----Another way of implementing LL----///////////////////////////////////////
class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class sinlglyLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.maxSize = 10;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.maxSize;
  }

  push(value) {
    if (this.isFull()) {
      throw "LL overload";
    }

    let newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
    return this;
  }

  pop() {
    if (this.isEmpty()) {
      return "Empty LL";
    }

    if (this.size === 1) {
      let lastNode = this.tail.val;
      this.head = null;
      this.tail = null;
      this.size--;
      return lastNode;
    }

    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    this.tail = current;
    current.next = null;
    this.size--;
    return current.val;
  }

  unshift(value) {
    let node = new Node(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
      this.size++;
      return this;
    }

    node.next = this.head;
    this.head = node;
    this.size++;
    return this;
  }

  shift() {
    if (this.isEmpty()) {
      throw "LL is empty";
    }
    if (this.size === 1) {
      let lastNode = this.tail.val;
      this.head = null;
      this.tail = null;
      this.size--;
      return lastNode;
    }
    this.head = this.head.next;
    this.size--;
    return this.head.val;
  }

  insert(index, value) {
    if (index === 0) this.unshift(value);
    if (index === this.size) this.push(value);
    if (index < 0 || index > this.size) throw "Invalid Index";
    let counter = 0;
    let newNode = new Node(value);
    let current = this.head;
    if (index > 0 && index < this.size) {
      while (current.next !== null) {
        let previous = current;
        current = current.next;
        counter++;
        if (counter === index) {
          previous.next = newNode;
          newNode.next = current;
          this.size++;
          return this;
        }
      }
    }
  }

  remove(index) {
    if (index === 0) {
      this.shift();
      return true;
    }
    if (index === this.size - 1) {
      this.pop();
      return true;
    }
    if (index >= this.size || index < 0) throw "Index out of bound";
    if (this.size === 1) {
      let lastNode = this.tail.val;
      this.head = null;
      this.tail = null;
      this.size--;
      return lastNode;
    }
    let counter = 0;
    let current = this.head;
    if (index > 1 && index < this.size) {
      while (current.next !== null) {
        let previous = current;
        current = current.next;
        counter++;
        if (counter === index) {
          previous.next = current.next;
          this.size--;
          return this;
        }
      }
    }
  }

  rotate(k) {
    if (k > this.size || k < 0) {
      throw new Error("Invalid Input");
    }
    for (let i = 1; i <= k; i++) {
      let current = this.head;
      this.head = this.tail;
      this.head.next = current;
      while (current.next !== this.tail) {
        current = current.next;
      }
      this.tail = current;
      this.tail.next = null;
    }
  }

  reverse() {
    let current = this.head;
    let previous = null;
    let next = null;

    while (current) {
      next = current.next;
      current.next = previous;
      if (current === this.head) {
        this.tail = current;
      }
      previous = current;
      current = next;
    }
    this.head = previous;
  }

  log() {
    let aux = [];
    if (this.isEmpty()) {
      return "LL is empty";
    }
    aux.push(this.head.val);
    let node = this.head.next;
    while (node !== null) {
      aux.push(node.val);
      node = node.next;
    }
    return aux.join(" -> ");
  }
}

let linkedList = new sinlglyLL();

linkedList.push(12);
linkedList.push(22);
linkedList.push(33);
linkedList.push(66);
linkedList.push(77);
linkedList.push(88);
console.log(linkedList.log());
// console.log(linkedList.unshift(55));
linkedList.reverse();
console.log(linkedList.log());
// linkedList.remove(0);
// linkedList.remove(0);
// linkedList.remove(0);
// console.log(linkedList.remove(-1));
// // console.log(linkedList.remove(0));
// console.log(linkedList);
