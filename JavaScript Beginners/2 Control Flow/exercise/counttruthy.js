// Count truthy

let valueList = ["Arun", 1, "", 0, undefined, NaN, 2, 3, 4, 5];
let finalOutput = [];

function countTruthy(array) {
  let count = 0;
  for (let value of array) {
    if (value) {
      finalOutput.push(value);
      count += 1;
    }
  }
  return finalOutput;
}

console.log(countTruthy(valueList));
