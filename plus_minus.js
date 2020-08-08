// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
  let divisor = arr.length;
  let posNum = 0;
  let negNum = 0;
  let zeroNum = 0;
  for (let num in arr) {
    if (arr[num] > 0) {
      posNum += 1;
    } else if (arr[num] < 0) {
      negNum += 1;
    } else {
      zeroNum += 1;
    }
  }

  console.log((posNum / divisor).toFixed(6));
  console.log((negNum / divisor).toFixed(6));
  console.log((zeroNum / divisor).toFixed(6));
}

/*
Expected Output
0.500000
0.333333
0.166667
 */
