// Value vs Reference types

// primitives are copied by their values
//  objects are copied by their reference

// Primitives
// here both x and y are independent and have different memory spaces
// changing one value does not change other
// let x = 10;
// let y = x;

// x = 20;

// let number = 10;
// function increaseNumber(number) {
//   number++;
// }
// console.log(number);

// Reference Types
// here both x and y point to the same object and changing one value changes the value in the memory location
// let x = { value: 10 };
// let y = x;

// x.value = 20;

// let obj = { number: 10 };
// function increaseNumber(obj) {
//   obj.number++;
// }

// increaseNumber(obj);
// console.log(obj);
