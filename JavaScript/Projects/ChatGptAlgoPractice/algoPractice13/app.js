// Array

const numArray = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 7, 6, 7, 4, 6, 2, 6]

const occurrences = numArray.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {})

console.log(occurrences);