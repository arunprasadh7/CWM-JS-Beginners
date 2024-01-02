// 1 Function declaration vs Expression
// Hoisting - process of moving function declaration to the top of the file by js engine while execution

// function declaration
function walk() {
  console.log("Walk");
}

walk();

// Function Expression

// Named function expression - usually not preferred
let swim = function swimming() {
  console.log("Swimming");
};

swim();

// Anonymous function expression
let run = function () {
  console.log("Running");
};
let running = run;
run();
