// Arithmetic operators

let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// Increment Operator  ++
console.log(x++);
console.log(++x);

// Decrement Operator
console.log(--x);

// ASSIGNMENT OPERATOR -   =,  +=, -=

// COMPARISON OPERATORS
// relational operator  >, >=, <. <=
// equality operator ===, !==

// EQUALITY OPERATOR
// strict equality ===, !==     both value and type must  be same (Type + value)
console.log(1 === 1);
console.log("1" === 1);

// lose equality ==, !=        only checks for same values, converts the value on the right side to match the value on the left  side (VALUES)
console.log(1 == 1);
console.log("1" == 1);

// TERNARY OPERATOR  ?
// if a cx has more than 100 points they are gold else silver
let points = 125;

let customer = points > 100 ? "Gold Member" : "Silver Member";
console.log(customer);

// LOGICAL OPERATORS and, or , not
// logical AND &&

// loan eligibility
let salary = 10000;
let creditScore = 7.5;

let loanStatus =
  salary > 5000 && creditScore > 6 ? "Eligible for loan" : "Not Eligible";
console.log(loanStatus);

// logical OR ||
let highIncome = true;
let minimumCreditScore = false;
let statuss = highIncome || minimumCreditScore ? "Eligible" : "Not eligible";
console.log(statuss);

// NOT !
let applicationRefused = !statuss;
console.log(applicationRefused);

// LOGICAL NON-BOOLEAN - Truthy vs Falsy values

// SHORT CIRCUITING - execution stops at the first truthy value

// let userColor = "red";
let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor);

// EXERCISE - SWAPPING VARIABLES

let a = "red";
let b = "blue";

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);
