let arr = ["pizza", 5, 24];
/*
for (let ele of arr) {
  console.log(ele);
}
*/
let newArr = arr.map((x, y, z) => {
  console.log("Element: " + x);
  console.log("At Index: " + y);
  console.log("Array: " + z);
  return x + 5;
});

console.log(newArr);
console.log(arr);
