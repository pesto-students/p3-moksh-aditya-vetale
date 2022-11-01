function createStack() {
  let items = this.items;
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
  };
}
const stack = createStack.call({ items: [] });
stack.push(10);
stack.push(5);
console.log(stack.pop());
console.log(stack.items);
