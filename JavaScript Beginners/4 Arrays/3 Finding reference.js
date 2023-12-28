// Finding arrays - reference types

// find() - returns the first value that matches the criteria
// findIndex()

const hero = [
  { position: 2, name: "Arc", type: "Agility" },
  { position: 1, name: "Phantom Lancer", type: "Agility" },
  { position: 3, name: "Slardar", type: "Strength" },
];

let pick1 = hero.find(function (character) {
  return character.name === "Arc";
});

// let pick1 = hero.findIndex(function (character) {
//     return character.name === "Arc";
//   });

console.log(pick1);

let pick2 = hero.find(function (character) {
  return character.type === "Strength";
});

console.log(pick2);
