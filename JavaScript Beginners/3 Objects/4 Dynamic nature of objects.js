// Dynamic nature of objects

const circle = {
  radius: 1,
};

circle.area = 25;
circle.draw = function () {
  console.log("Hello Circle");
};

delete circle.area;
console.log(circle);
