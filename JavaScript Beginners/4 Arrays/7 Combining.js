// 7 Combining & Slicing arrays

const first = [1, 2, 3, { id: 1 }];
const second = [4, 5, 6];

// concat
const combined = first.concat(second);
console.log(combined);

first[3].id = 20;
console.log(combined);

// slice
const slicedNumber = combined.slice(2, 5);
console.log(slicedNumber);
