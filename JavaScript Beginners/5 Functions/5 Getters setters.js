// 5 Getters & Setters
// getters = to access properties
// setters =  to change or mutate them

const person = {
  fname: "Arc",
  lname: "Warden",
  get fullName() {
    return `Hello ${person.fname} ${person.lname}.`;
  },
  set fullName(name) {
    const full = name.split(" ");
    this.fname = full[0];
    this.lname = full[1];
  },
};

console.log(person);
console.log(person.fullName);

person.fullName = "Arun Prasadh";
console.log(person.fullName);
