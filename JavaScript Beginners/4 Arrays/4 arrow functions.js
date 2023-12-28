// 4 Arrow functions

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

let course = courses.find((course) => course.name === "a");

console.log(course);

const electronics = [
  { id: 1, name: "phone", brand: "Realme" },
  { id: 2, name: "Laptop", brand: "Apple" },
  { id: 3, name: "camera", brand: "Gopro" },
];

let item1 = electronics.find((items) => items.brand === "Apple");
console.log(item1);

let item2 = electronics.find((items) => items.name === "camera");
console.log(item2);
