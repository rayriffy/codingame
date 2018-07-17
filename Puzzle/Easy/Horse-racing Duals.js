print(
  new Array(+readline()) // Read Number of horses
  .fill() // and
  .map(() => +readline()) // read an initial array
  .sort((a, b) => a > b) // sort this array and
  .map((x, i, arr) => Math.abs(x - arr[i + 1])) // calculate the differences
  .sort((a, b) => a > b) // sort it again
  [0] // and print the very first element - min value
);