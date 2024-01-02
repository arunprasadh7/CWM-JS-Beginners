// 6 Try and catch

const person = {
  fname: "Arun",
  lname: "Prasadh",
  set fullName(name) {
    if (typeof name !== "string") throw new Error("Enter only string values.");
    const full = name.split(" ");
    if (full.length !== 2) throw new Error("Enter both first and second name.");
    console.log(name);
    this.fname = full[0];
    this.lname = full[1];
  },
};

console.log(person);

person.fullName = "Arc Warden";
console.log(person);

// catching null values
// try {
//   person.fullName = null;
// } catch (e) {
//   alert(e);
// }
// console.log(person);

// catching empty strings
try {
  person.fullName = "";
} catch (e) {
  alert(e);
}
