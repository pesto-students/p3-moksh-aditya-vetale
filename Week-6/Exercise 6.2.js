const arr = [
  [1, 2, 3, 5],
  [4, 5, 6, 8],
  [7, 8, 9, 6],
  [5, 12, 1, 20],
];

function spiral(arr) {
  let n = arr.length;
  let row = 0;
  let col = 0;
  let rowEnd = n - 1;
  let colEnd = n - 1;
  let counter = 1;
  while (col <= colEnd && row <= rowEnd) {
    // Top row & middle value (Where col === colEnd && row === rowEnd)
    for (let i = col; i <= colEnd; i++) {
      console.log(arr[row][i]);
    }
    row++;

    // end column
    for (let i = row; i <= rowEnd; i++) {
      console.log(arr[i][colEnd]);
    }
    colEnd--;

    // end row
    for (let i = colEnd; i >= col; i--) {
      console.log(arr[rowEnd][i]);
    }
    rowEnd--;

    // First col from end
    for (let i = rowEnd; i >= row; i--) {
      console.log(arr[i][col]);
    }
    col++;
  }
}

spiral(arr);
