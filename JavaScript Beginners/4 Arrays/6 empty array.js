// 6 Emptying an array

let numbers = [1, 2, 3, 4, 5];
let another = numbers;

// method 1 : does not work if there are multiple variables pointing to same array
numbers = [];

// method 2
numbers.length = 0;

// method 3
numbers.splice(0, numbers.length);

// method 4 - not suggested for large arrays as it caused performance issues
while (numbers.length > 0) {
  numbers.pop();
}
