// Constructor functions
// pascal case : OneTwoThree

function Circle(radius) {
  (this.radius = radius),
    (this.draw = function () {
      console.log("Draw");
    });
}

const c1 = new Circle(1);
