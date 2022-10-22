file = require("./stack");

let stack = new file.Stack();
let arr = [6, 8, 0, 1, 3];
for (let i = arr.length - 1; i >= 0; i--) {
  if (stack.isEmpty()) {
    stack.push(arr[i]);
    arr[i] = -1;
  } else if (arr[i] > stack.peek()) {
    let flag = true;
    let counter = 0;
    while (flag) {
      counter++;
      stack.pop();
      if (stack.isEmpty()) {
        stack.push(arr[i]);
        arr[i] = -1;
        flag = false;
      } else if (arr[i] < stack.peek()) {
        let temp = arr[i];
        arr[i] = stack.peek();
        stack.push(temp);
        flag = false;
      }
    }
    console.log(counter);
  } else if (arr[i] < stack.peek()) {
    let temp = arr[i];
    arr[i] = stack.peek();
    stack.push(temp);
  }
}

// for (let i = 2 * arr.length - 1; i > 0; i++) {
//   while (!stack.isEmpty() && arr[i] > stack.peek()) {
//     stack.pop();
//   }

//   if (i < arr.length) {
//     if (!stack.isEmpty()) {
//       arr[i] = stack.peek();
//     } else {
//       arr[i] = -1;
//     }
//     stack.push(arr[i]);
//   }
//   //   stack.push(arr[i]);
// }

console.log(arr);
