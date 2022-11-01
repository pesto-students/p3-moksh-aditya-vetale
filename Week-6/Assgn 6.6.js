const S = [-1, 2, 1, -4];
const target = 1;
let sum = 0;
let diff = Number.MAX_VALUE;
let res = 0;

for (let i = 0; i < S.length - 2; i++) {
  for (let j = i + 1; j < S.length - 1; j++) {
    for (let k = j + 1; k < S.length; k++) {
      let temp_sum = S[i] + S[j] + S[k];
      if (Math.abs(temp_sum - target) < diff) {
        diff = temp_sum - target;
        sum = temp_sum;
      }
    }
  }
}

console.log(sum);

//Time complexcity = O(n^3)
