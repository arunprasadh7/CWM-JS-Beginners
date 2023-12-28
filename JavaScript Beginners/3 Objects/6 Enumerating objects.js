// Enumerating Properties of an object

const circle = {
  radius: 1,
  draw() {
    console.log("Draw");
  },
};

// method 1
for (let key in circle) {
  console.log(key, circle[key]);
}

// method 2
for (let key of Object.keys(circle)) {
  console.log(key);
}

// method 3
for (let entry of Object.entries(circle)) {
  console.log(entry);
}

// method 4
if ("color" in circle) console.log("Yes");
if ("radius" in circle) console.log("Yes");
