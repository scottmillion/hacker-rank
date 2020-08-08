// https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i).concat("#".repeat(i)));
  }
}

staircase(6);

/*
Desired Output:
     *
    **
   ***
  ****
 *****
******
*/
