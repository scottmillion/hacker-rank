// https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  let diag1 = 0;
  let diag2 = 0;
  for (let i = 0; i < arr.length; i++) {
    diag1 += arr[i][i];
    diag2 += arr[i][Math.abs(i - (arr.length - 1))];
  }

  return Math.abs(diag1 - diag2);
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ]) === 15
);
