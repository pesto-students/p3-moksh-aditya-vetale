const A = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maximum(arr) {
  let max = 0;
  for (let i = 0; i < A.length - 1; i++) {
    let sum = A[i];
    for (let j = i + 1; j < A.length; j++) {
      sum = sum + A[j];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}

console.log(maximum(A));

//Time complexcity = O(N^2)
