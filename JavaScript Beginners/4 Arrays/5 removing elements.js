// 5 Removing Elements of an  array

const number = [1, 2, 3, 4, 5];

// End
const lastNumber = number.pop();
console.log(number);
console.log(lastNumber);

// start
const firstNumber = number.shift();
console.log(number);
console.log(firstNumber);

// middle
number.splice(1, 1);
console.log(number);
