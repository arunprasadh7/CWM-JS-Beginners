// for in loop
// used to iterate objects

const person = {
  name: "Arun",
  age: 27,
};

for (let key in person) {
  console.log(key, person[key]);
}

const colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(index, colors[index]);
}

// for of loops - used in arrays

let numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log(num);
}
