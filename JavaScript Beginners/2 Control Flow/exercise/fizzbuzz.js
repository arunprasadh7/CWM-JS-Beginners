// fizzbuzz
// divisible by 3 - Fizz
// divisible by 5 - Buzz
// divisible by 3 and 5 - FizzBizz

function fizzBuzz(number) {
  if (typeof number !== "number") return NaN;
  else if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
  else if (number % 3 === 0) return "Fizz";
  else if (number % 5 === 0) return "Buzz";
  else return number;
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(4));
console.log(fizzBuzz("arun"));
