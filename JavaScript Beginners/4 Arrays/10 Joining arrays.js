// 10 Joining arrays

const numbers = [1, 2, 3, 4, 5];

// join - converts arrays to string
let joined = numbers.join(",");
console.log(joined);

joined = numbers.join("-");
console.log(joined);

// split - converts string into array
const message = "My name is Arun";

let splitMessage = message.split(" ");
console.log(splitMessage);

const message2 = "Hello-how-are-you?";
splitMessage = message2.split("-");
console.log(splitMessage);
