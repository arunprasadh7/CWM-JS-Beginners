// Cloning an object

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// method 1
const another = Object.assign({ name: "arun" }, circle);
console.log(another);

// method 2
const another2 = { ...circle };
console.log(another2);
