const arr = [7, 6, 4, 3, 1];

function min(arr) {
  return arr.reduce((acc, e) => {
    return acc < e ? acc : e;
  }, arr[0]);
}

function max(arr) {
  let lowest = min(arr);
  let index = arr.indexOf(lowest);
  let max = arr[index];

  for (let i = index + 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(max(arr) - min(arr));
//Time complexcity = O(N^2)
