// Factory Functions

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Draw");
    },
  };
}

let c1 = createCircle(1);
c1.draw();

let c2 = createCircle(5);
c2.draw();
console.log(c2.radius);
