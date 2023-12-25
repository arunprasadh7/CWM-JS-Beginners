// Sum of multiples of 3 and 5 upto given limit(10)
// multiples of 3 : 3,6,9
// multiples of 5: 5,10
// sum of multiples = 33

function sumOfMultiples(limit) {
  let sumThree = 0;
  let sumFive = 0;
  let result;

  // multiples of three
  for (let i = 3; i <= limit; i++) {
    if (i % 3 === 0) {
      sumThree += i;
    }
  }

  // multiples of 5
  for (let i = 5; i <= limit; i++) {
    if (i % 5 === 0) {
      sumFive += i;
    }
  }

  // final sum of multiples
  result = sumThree + sumFive;
  console.log(
    `Sum of multiples of 3 & 5 within the limit ${limit} = ${result}`
  );
}

sumOfMultiples(10);
