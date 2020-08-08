function hurdleRace(k, height) {
  let maxHeight = 0;
  for (let i = 0; i < height.length; i++) {
    if (height[i] > maxHeight) {
      maxHeight = height[i];
    }
  }
  return k > maxHeight ? 0 : Math.abs(maxHeight - k);
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2]) === 2);
console.log(hurdleRace(7, [2, 5, 4, 5, 2]) === 0);
