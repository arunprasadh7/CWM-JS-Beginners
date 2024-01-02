// 4 Default parameter

// intrest calculator  without default values

function intrest(principal, rate, years) {
  return ((principal * rate) / 100) * years;
}

console.log(intrest(10000, 3.5, 5));

// using default parameters
function intrestCalc(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}
console.log(intrestCalc(10000));
