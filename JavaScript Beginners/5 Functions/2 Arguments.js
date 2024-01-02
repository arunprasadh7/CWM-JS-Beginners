// 3 Arguments - args are objects

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 5));
console.log(sum(1, "1"));
console.log(sum(1, undefined));

// giving less args to the function - Nan
console.log(sum(1));

// giving more args to the function - adds only first two
console.log(sum(1, 2, 3, 4, 5));

// accessing args of the  objects

function sumObject() {
  let total = 0;
  for (let value of arguments) {
    total += value;
  }
  return total;
}

console.log(sumObject(1, 2, 3, 4, 5));
