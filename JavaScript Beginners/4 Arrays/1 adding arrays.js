// 1 Adding arrays

const number = [4, 5];

// End
number.push(6, 7);
console.log(number);

// Beginning
number.unshift(1, 2);
console.log(number);

// Middle
number.splice(2, 0, 3, "a", "b");
console.log(number);
