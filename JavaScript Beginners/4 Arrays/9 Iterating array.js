// 9 Iterating an array

const numbers = [1, 2, 3, 4, 5];

// for of
for (let number of numbers) {
  console.log(number);
}

// forEach
numbers.forEach((number) => console.log(number));

// using forEach we can get the index
numbers.forEach((number, index) => console.log(number, index));
