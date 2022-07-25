const arr = [5, 10, 3, 2, 50, 80];
const B = 78;

function diff(arr, B) {
  if (B === 0) {
    if (hasDuplicate(arr)) {
      return 1;
    }
    return 0;
  }
  for (num of arr) {
    if (substraction(num, B, arr) || substraction(B, num, arr)) {
      return 1;
    }
  }
  return 0;
}

function hasDuplicate(arr) {
  let set = new Set(arr);
  return set.size !== arr.length;
}

function substraction(a, b, arr) {
  let substraction = a - b;
  if (
    arr.indexOf(substraction) !== -1 &&
    substraction !== a &&
    substraction !== b
  ) {
    return true;
  }
  return false;
}

console.log(diff(arr, B));
//Time complexcity = O(N)
