// // this keyword
// method = points to the object
// function = points to global (widow/global)

const video = {
  title: "a",
  play() {
    console.log(this);
  },
};
