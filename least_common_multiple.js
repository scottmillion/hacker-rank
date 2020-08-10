/*
Intermediate Algorithm Scripting: Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

let primeNumbers = [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
];

function smallestCommons(arr) {
  let arrSorted = arr.sort((a, b) => a - b);
  let newArr = [];
  for (let j = arrSorted[0]; j <= arrSorted[1]; j++) {
    newArr.push(j);
  }

  let newArr2 = [...newArr];
  let minFactors = {};
  let counterArray = [];

  for (let i = 0; i < primeNumbers.length; i++) {
    let denominator = primeNumbers[i];
    if (denominator > newArr2[newArr2.length - 1]) {
      break;
    }
    newArr = newArr.map((a) => {
      let quotient = a / denominator;
      let result = a;
      if (!Number.isInteger(quotient)) {
        return result;
      }
      let counter = 0;
      while (Number.isInteger(quotient)) {
        counter++;
        result = quotient;
        quotient = quotient / denominator;
      }
      if (minFactors[denominator]) {
        if (counter > minFactors[denominator]) {
          minFactors[denominator] = counter;
        }
      } else {
        minFactors[denominator] = counter;
      }

      counterArray.push([denominator, counter]);
      return result;
    });
  }

  let product = 1;
  for (let key of Object.keys(minFactors)) {
    product *= Math.pow(key, minFactors[key]);
  }

  return product;
}

console.log(smallestCommons([1, 5]) === 60);
console.log(smallestCommons([10, 2]) === 2520);
console.log(smallestCommons([23, 18]) === 6056820);
