// while loop

// odd numbers between 1 and 5
let i = 0;
while (i < 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

// do while  - loop will be executed atleast once even if the condition evalutes to false
let n = 0;
do {
  if (n % 2 !== 0) console.log(n);
  n++;
} while (n < 5);
